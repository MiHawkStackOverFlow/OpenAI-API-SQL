import { Configuration, OpenAIApi } from "openai";
import dotenv  from "dotenv";
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if(!openaiApiKey) {
  console.error('OPEN_API_KEY is not set');
  process.exit(1);
}

const configuration = new Configuration({
  apiKey: openaiApiKey,
});

const openaiClient = new OpenAIApi(configuration);

export default openaiClient;