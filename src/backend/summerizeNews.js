// https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=
import React,{ useState } from 'react'

export default function summerizeNews(url) {

    const [Summary, setSummary] = useState();

    const GeminiapiKey = import.meta.env.VITE_GEMINI_API_KEY;

    const summarizeWithGemini = async (link) => {
        const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GeminiapiKey, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Summarize the following in 3 bullet points: \n${link}`
                    }]
                }]
            })
        });

        const data = await res.json();
        setSummary(data.candidates[0].content.parts[0].text);
        return data.candidates[0].content.parts[0].text;
    };

    return (
        summarizeWithGemini(url)
    )
}
