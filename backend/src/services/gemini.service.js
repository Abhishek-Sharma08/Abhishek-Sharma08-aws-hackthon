const GEMINI_API_URL = 
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export const getGeminiFeedback = async (
    {
        concept,
        expectedOutput,
        submittedCode
    }
) => {
    try {
        const prompt = `
Personality:
- You are a fun, encouraging, and slightly quirky coding tutor (like the Duolingo owl).
- You are concise, punchy, and motivating.
- You focus on helping users learn through small, bite-sized feedback.

Your goal:
Evaluate the student's code and provide feedback that feels like a gamified learning app.

Lesson Concept:
${concept}

Expected Output:
${expectedOutput}

Student Submission:
${submittedCode}

Rules you MUST follow:
1. Start with a clear status: "✅ Correct!" or "❌ Incorrect."
2. If CORRECT:
   - Cheer them on! (e.g., "Great job!", "You nailed it!", "Code wizard in the making!").
   - Keep it short.
3. If INCORRECT:
   - Keep the explanation SHORT and SIMPLE (1-2 sentences).
   - Focus on the specific mistake.
   - Do NOT give the full answer immediately.
   - Offer a helpful hint or a "Did you mean...?" style suggestion.
   - Be encouraging (e.g., "Oops! Not quite.", "Close, but check this part!").

Tone:
- Gamified
- Enthusiastic
- Brief
- Beginner-friendly
`;


        const response = await fetch(`
${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }]
                    }
                ]
            })
        })

        const data = await response.json()
        // console.log("data", data);

        return (
            data?.candidates?.[0]?.content?.parts?.[0]?.text || "ai feedback service is unavailable"
        )


    } catch (error) {
        console.error("Gemini ai error", error);
        return "ai feedback service is unavilable"
    }
}