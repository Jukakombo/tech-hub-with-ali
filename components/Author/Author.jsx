import Image from "next/image";
import React from "react";

const getAuther = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    throw new Error("Sorry author not founder!");
  }
  return res.json();
};

const Author = async ({ userId }) => {
  const author = await getAuther(userId);
  console.log(author);
  return (
    <div>
      <div className="flex items-center">
        <div className="">
          <Image
            src="/images/post.jpg"
            alt="author"
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
        </div>
        <div className="flex items-center">
          <div className="mr-8">
            <h1>Author</h1>
            <p>{author.name}</p>
          </div>
          <div className="">
            <h1>Time</h1>
            <p>10 , Feb 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
