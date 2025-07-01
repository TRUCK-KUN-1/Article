import React, { useState } from 'react'

export default function fetchNews(q) {

    const NEWSapiKey = import.meta.env.VITE_NEWS_API_KEY;

    // If you need to fetch data on mount, use useEffect instead.
    // Example:


    const fetchData = async (q) => {
        console.log("cdm");
        let url = "https://newsapi.org/v2/everything?q=" + q + "&from=2025-05-29&language=en&sortBy=publishedAt&apiKey=" + NEWSapiKey;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
        // handle data here
    };
    let data = fetchData(q);

    return (
        data
    )
}
