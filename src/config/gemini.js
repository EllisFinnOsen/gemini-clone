import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// The API key can be set to an empty string for the hosted version to use mock data.
const apiKey = "";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  if (!apiKey) {
    // Return mock data if no API key is set
    console.log("No API key set. Returning mock data.");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return `**No API Key Detected**  
Since this is the demo version, there is no actual connection to Google Gemini.

**How to Set Up the Real Connection**

After cloning this project...

1. *Obtain Your API Key:*  
   * Get your Google Gemini API Key from the Gemini Developer API.  

2. *Locate Your Configuration File:*  
   * Open the project and locate *'gemini.js'* in the *'src/config/'* folder.  

3. *Update the API Key Line:*  
   * Paste your API key into the following line near the top:  
     const apiKey = "";


4. *Run the Development Server:*  
   * Run one of the following commands:  
     npm run dev
     # or
     yarn dev
     # or
     pnpm dev
     # or
     bun dev
`;
  }

  // If the API key is set, proceed as usual
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
}

export default run;
