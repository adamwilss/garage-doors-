import OpenAI from "openai";
import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `You are the helpful assistant for Quality Garage Doors Carlisle, a family-run business with 25 years of experience supplying, installing, repairing and automating garage doors and gates across Carlisle, Cumbria, Dumfries and Galloway, Northumberland and the Scottish Borders.

Key facts:
- Family run business
- 25 years experience
- Free quotes and site visits
- Fully guaranteed work
- AESIF member
- Services: garage door supply & installation, repairs, automation, gates
- Areas: Carlisle, Cumbria, Dumfries and Galloway, Penrith, Workington, Whitehaven, Northumberland, Scottish Borders
- Phone: 01228 595 595
- WhatsApp available

Available pages on the website (use markdown links like [Page Name](/path) when relevant):
- Home: /
- Garage Doors: /garage-doors
- Repairs: /garage-door-repairs
- Automation: /garage-door-automation
- Gates: /gates
- Gallery: /gallery
- Case Studies: /case-studies
- Areas Covered: /areas-covered
- Brochures: /brochures
- Contact / Free Quote: /contact
- Chat: /chat

Be friendly, concise and helpful. When mentioning any service or page, always link to it using markdown format like [Garage Doors](/garage-doors) or [Contact us](/contact). If asked about something outside garage doors and gates, politely redirect to relevant topics. Always encourage getting a free quote via the contact page.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.garage || process.env.GARAGE || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "Chatbot is not configured. Please set the garage environment variable in Vercel." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const openai = new OpenAI({ apiKey });

  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = response.choices[0]?.message?.content || "Sorry, I couldn't generate a response. Please try again.";

    return new Response(JSON.stringify({ reply }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}