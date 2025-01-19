## About The Project

![project heading image](https://github.com/EllisFinnOsen/gemini-clone/tree/main/src/assets/Header.png?raw=true)

The primary goal of this project was to gain more familiarity with React. Additionally, this project incorporates a function chat input through API Access to Gemini. User prompts are saved under 'Recents' in the side bar. Additionally, the state changes are animated, and display a loading animation while the gemini response is being fetched.

[![My Tech Stack](https://github-readme-tech-stack.vercel.app/api/cards?lineCount=1&width=500&line1=react%2Creact%2Cffffff%3Bjavascript%2Cjavascript%2Cffffff%3Bcss%2Ccss%2Cffffff%3B)

![project mockup image](https://github.com/EllisFinnOsen/gemini-clone/tree/main/src/assets/Mockup.png?raw=true)

## Getting Started

First, Get your Google Gemini API Key from [Gemini Developer API](https://ai.google.dev/gemini-api/docs?gad_source=1&gclid=Cj0KCQiA4rK8BhD7ARIsAFe5LXIFOIoAIem-TAfAjUHXWAcrz8XG77JvOQfeSgCZTPKZKCsBOyfm1TIaAnNVEALw_wcB)

Open the project and locate 'YOURgemini.js' in src/config/

locate and paste your API key into the following line near the top:

```
const apiKey = "YOUR_GOOGLE_GEMINI_API_KEY_HERE";
```

And then rename the file to simply "gemini.js"

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Acknowledgements:

- [GreatStack on Youtube](https://www.youtube.com/watch?v=0yboGn8errU&list=PLjwm_8O3suyMMs7kfDD-p-yIhlmEgJkDj)
