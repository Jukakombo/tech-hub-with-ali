import Author from "@/components/Author/Author";
import Image from "next/image";
import React from "react";

const getSingPost = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch date from the external server");
  }

  return res.json();
};

const Singlepost = async ({ params }) => {
  const { slug } = params;

  const post = await getSingPost(slug);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <Image src="/images/post.jpg" alt="post" height={500} width={500} />
        </div>
        <div className="text_post">
          <div className="">
            <h1 className="font-bold text-2xl ">{post.title}</h1>
            <div className="my-8">
              <Author userId={post.userId} />
            </div>
          </div>
          <p className="text-lg text-gray-400 mb-8">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Singlepost;
