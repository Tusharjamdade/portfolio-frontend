// import { OpenAIStream, StreamingTextResponse } from "ai";
// import { NextRequest } from "next/server";
// import { Configuration, OpenAIApi } from "openai-edge";


// const config = new Configuration({
//     apiKey:process.env.OPENAI_API_KEY
// })

// const openai = new OpenAIApi(config)
// export const runtime = "edge";

// export async function POST(req:NextRequest){
//     const { messages } = await req.json()
//     const response = await openai.createChatCompletion({
//         model:"gpt-3.5-turbo",
//         stream:true,
//         messages:messages
//     }) 

//     const stream = OpenAIStream(response)
//     return new StreamingTextResponse(stream)

// }
// AIzaSyAPDV0ILVEzR5n3oIMgDlJu43-BHbYu7HU

import { GOOGLE_KEY } from "@/env/env";
import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req:NextRequest){
    const body = await req.json()
    const generationConfig = {
        stopSequences :["red"],
        maxOutPutTokens:100,
        temperature:0.9,
        topP:0.1,
        topK:16
    }
    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_KEY || '');
    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    async function run() {
        const prompt = " "+body.search
      
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        return text
    }
    const text = await run()
    return Response.json({
        text
    }) 
      
}
