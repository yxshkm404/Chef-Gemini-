***

# Chef Gemini

Chef Gemini is an AI-powered recipe assistant that helps users generate creative, step-by-step recipes from simple prompts. It uses a Gemini-based backend (via `ai.js`) and a React + Vite frontend to provide an interactive cooking assistant experience. [https://github.com/yxshkm404/Chef-Gemini-](https://github.com/yxshkm404/Chef-Gemini-)

## Features

- Prompt-based recipe generation using AI.
- Clean React frontend built with Vite.
- Modular components for header, main content, and layout.
- Responsive styling with custom CSS.
- Simple structure that is easy to extend with more features (favorites, history, etc.).  

## Tech stack

- React (JSX components in `frontend/`)
- Vite as the build tool (`vite.config.js`)
- Custom CSS (`frontend/index.css`)
- AI integration via custom helper (`frontend/ai.js`)

## Project structure

- `frontend/App.jsx` – Root application component.
- `frontend/Header.jsx` – Top navigation / branding header.
- `frontend/Main.jsx` – Main UI for prompts, responses, and recipe display.
- `frontend/ai.js` – AI helper for interacting with the Gemini API or backend.
- `frontend/index.jsx` – React entry point.
- `frontend/index.html` – HTML template for Vite.
- `frontend/index.css` – Global styles.
- `frontend/components/` – Additional reusable components.
- `frontend/images/` – Static image assets.

## Getting started

1. Clone the repository:
   - `git clone https://github.com/yxshkm404/Chef-Gemini-.git`
   - `cd Chef-Gemini-/frontend`
2. Install dependencies:
   - `npm install`
3. Configure your Gemini / AI API:
   - Open `frontend/ai.js`
   - Add your API key and endpoint where indicated.
4. Start the development server:
   - `npm run dev`
5. Open the URL shown in your terminal (usually `http://localhost:5173`) in your browser.

## Build and deploy

- Create a production build:
  - `npm run build`
- Preview the build locally:
  - `npm run preview`
- Deploy the contents of `dist/` to any static hosting (Netlify, Vercel, GitHub Pages, etc.).

## Future enhancements

- User authentication and saved recipe history.
- Filters for cuisine, dietary preference, and difficulty.
- Image support for generated dishes.
- Export / share recipes as PDF or via social media.

## License

This project is open for personal and educational use. Add a specific license file (for example MIT) if you want others to reuse or contribute formally.