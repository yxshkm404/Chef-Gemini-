# 👨‍🍳 Chef Gemini

**Chef Gemini** is an AI-powered culinary assistant built with React and Vite. It utilizes Google's Gemini AI to help users generate recipes, plan meals, and answer cooking-related questions.

## 🚀 Features

* **AI Recipe Generation:** Generate unique recipes based on ingredients you have.
* **Interactive UI:** Get cooking assistance via a clean interface.
* **Fast Performance:** Built on top of Vite for lightning-fast HMR and build times.
* **Responsive Design:** Works on desktop and mobile devices.

## 🛠️ Tech Stack

* **Frontend:** [React](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **AI Integration:** [Google Gemini API](https://ai.google.dev/)
* **Styling:** CSS
* **State Management:** React Hooks

## 📂 Project Structure

```text
CHEF GEMINI/
├── components/         # Reusable UI components
├── images/             # Static assets
├── ai.js               # Logic for handling Gemini AI API calls
├── App.jsx             # Main application component
├── Header.jsx          # Header/Navigation component
├── Main.jsx            # Main content area component
├── index.css           # Global styles
├── index.html          # HTML entry point
├── index.jsx           # React entry point
├── package.json        # Project metadata and dependencies
└── vite.config.js      # Vite configuration
```

## 🏁 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

* Node.js (v14 or higher)
* npm (or yarn/pnpm)
* A Google Gemini API Key

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yxshkm404/Chef-Gemini-.git
cd Chef-Gemini/frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in the root directory and add your Gemini API key. (Note: Ensure your variable name matches what is used in `ai.js`, usually prefixed with `VITE_` for Vite projects).

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser** and navigate to `http://localhost:5173`.

## 💡 Usage

1. Enter the ingredients you have in your fridge or a specific dish you want to cook.
2. Click the generate button.
3. Chef Gemini will provide a detailed recipe with instructions!

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## 📞 Contact

**Yaswanth Kumar**

GitHub: [@yxshkm404](https://github.com/yxshkm404)


---

Made with ❤️ and code.