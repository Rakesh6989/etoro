import { NextResponse } from "next/server";

export async function POST(req) {
  const { message } = await req.json();

  const response = await fetch(
    "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: message }),
    }
  );

  const result = await response.json();
  const output =
    result?.generated_text || result?.[0]?.generated_text || "⚠️ Error";

  return NextResponse.json({ reply: output });
}
