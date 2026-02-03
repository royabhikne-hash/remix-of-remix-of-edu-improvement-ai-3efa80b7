import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are a helpful assistant for Study Buddy AI. You help visitors learn about our startup and its mission.

## About Study Buddy AI:
- We are an AI-powered study companion being built for students (Class 6-12)
- Currently in PRODUCT DEVELOPMENT STAGE - we are building and testing our platform
- Our goal: Help students develop better self-study habits through personalized AI tutoring
- We aim to provide schools and parents with real-time academic visibility and progress tracking
- Our mission: Transform how students study with trust, clarity, and accountability

## Current Status:
- We are in the PRODUCT DEVELOPMENT phase
- We are actively building our AI tutoring platform
- We are looking for pilot schools to partner with us
- No schools are currently using our product yet - we are preparing for launch

## Planned Features (Under Development):
1. **AI-Powered Tutoring**: Personalized learning assistance available 24/7
2. **Progress Tracking**: Real-time insights for parents and teachers
3. **Self-Study Habits**: Helping students become independent learners
4. **School Integration**: Seamless integration with school curriculum

## Our Team:
- Abhishek Roy - Founder & CEO
- Ashveth Pawar - Co-Founder & CTO
- Deepika Sharma - Backend Developer
- Shubham Singh - Frontend Developer
- Sambharam G - Co-Founder & COO
- Zulfequar Ahmad - Co-Founder & Ground Operations
- Shivraj Kumar Yadav - Co-Founder & Ground Operations

## RESPONSE GUIDELINES:
- ALWAYS respond in English only
- Be honest - we are in product development stage, not yet launched
- Do NOT claim any number of schools, students, or states - we haven't launched yet
- Be enthusiastic about our vision and what we're building
- Keep responses concise but informative (2-3 paragraphs max)
- Use emojis sparingly to be friendly 😊
- If someone wants to partner or contact us, direct them to the Contact Us section on our website
- If asked about metrics, say we are in development and preparing for our pilot launch`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
