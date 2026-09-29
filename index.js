import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({apiKey:"api_key"});
console.log("Welcome to the Interactive Bun App! (Type 'exit' to quit)\n");


while (true) {
  // 1. Take user input synchronously
  const input = prompt("You > ");

  // Handle exit condition
  if (!input || input.trim().toLowerCase() === "exit") {
    console.log("Goodbye!");
    break;
  }

  // 2. Process the input
  const result = await processInput(input);

  // 3. Return the answer
  console.log(`Bot > ${result}\n`);
}

// Your custom processing logic
async function processInput(input) {

  
  // Example processing: reverse text and count characters
  // const reversed = input.split("").reverse().join("");

  const response = await ai.models.countTokens({
    model: 'gemini-3.8-flash',
    contents: input,
  });
  
  return `Processed "${input}" (${input.length} chars) -> Token-Count: "${response.totalTokens}"`;
}