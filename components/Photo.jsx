import Image from "next/image";
import React from "react";

const Photo = ({ ali }) => {
  console.log(ali);
  return (
    <div>
      <div className="card" key={ali.id}>
        <Image src={ali.url} width={500} height={500} alt="Photo" />
        <Image
          className="p-2 border-white border-2"
          src={ali.thumbnailUrl}
          width={500}
          height={500}
          alt="Photo"
        />
        <h1>Id Number:{ali.id}</h1>
        <p>Title:{ali.title}</p>
      </div>
    </div>
  );
};

export default Photo;
