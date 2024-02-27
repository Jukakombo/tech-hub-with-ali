"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
const url =
  "https://newsapi.org/v2/everything?q=tesla&from=2024-02-22&sortBy=publishedAt&apiKey=2d3fdabfdb7c490c97f9310fc88bab74";

const fetchArticles = async () => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch the articles from the API provided");
  } else {
    return res.json();
  }
};

const Testing = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const articlesss = async () => {
      const getArticls = await fetchArticles();
      setNews(getArticls.articles);
    };
    articlesss();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 m-auto gap-8">
        {news.length > 0 ? (
          news.map((x, index) => (
            <div className="" key={index}>
              {/* <Image src="" alt="news" width={500} height={500} /> */}
              <h1>{x?.title}</h1>
              <p>{x?.description}</p>
              <h1>{x?.author}</h1>
              <h1>Published At: {new Date(x.publishedAt).toLocaleString()}</h1>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Testing;
