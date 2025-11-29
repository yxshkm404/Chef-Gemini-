import React from "react";
import IngredientsList from "./components/IngredientsList";
import GeminiRecipe from "./components/GeminiRecipe";
import { getRecipeFromGemini } from "./ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  async function getRecipe() {
    setLoading(true);
    const recipeMarkdown = await getRecipeFromGemini(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(false);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addIngredient(new FormData(e.target));
          e.target.reset();
        }}
        className="add-ingredient-form"
      >

        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />

        <button type="submit">Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {loading && (
        <p className="loading" aria-live="polite">
          Preparing your delicious recipe... 🍽️
        </p>
      )}

      {!loading && recipe && <GeminiRecipe recipe={recipe} />}
      
    </main>
  );
}
