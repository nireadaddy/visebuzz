import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { prompt, language, ctaLink, wordCount, adFormat, toneOfVoice, contentType, generateImage } = await req.json();

  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key is not set' }, { status: 500 });
    }

    if (!prompt || !language || !ctaLink) {
      return NextResponse.json({ error: 'Prompt, language, and CTA link are required' }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an AI ad copywriter. Generate a short, engaging ad for the following product or service. The ad should be in ${language}, use a ${toneOfVoice} tone, be formatted for ${adFormat}, and focus on ${contentType} content. The word count should be approximately ${wordCount} words. Include emojis in your response. The response should be in JSON format with the following structure:
          {
            "title": "A catchy title for the ad",
            "copy": "The main ad copy",
            "icon": "A single emoji that represents the ad",
            "engagementRate": A number between 1 and 100 representing the estimated engagement rate
          }`
        },
        {
          role: "user",
          content: `Create an ad for the following product/service. Include the CTA link: ${ctaLink}\n\n${prompt}`
        }
      ],
      max_tokens: 500,
    });

    const content = completion.choices[0].message.content;
    const parsedContent = JSON.parse(content || '{}');

    if (generateImage) {
      const imageResponse = await openai.images.generate({
        model: "dall-e-2",
        prompt: `Create an advertisement image for: ${parsedContent.title}. The image should represent: ${parsedContent.copy}`,
        n: 1,
        size: "1024x1024",
      });

      parsedContent.imageUrl = imageResponse.data[0].url;
    }

    return NextResponse.json({ result: parsedContent });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json({ error: 'Failed to generate ad content' }, { status: 500 });
  }
}