"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Blogcard from "./Blogcard";

const url = process.env.NEXT_PUBLIC_POST_URL

const getPosts = async () => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch the data from the API");
  }
  return res.json();
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetData = async () => {
      const data = await getPosts();
      setPosts(data);
    };

    fetData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {posts.map((x, index) => (
        <Blogcard x={x} key={index} />
      ))}
    </div>
  );
};

export default Blog;
