import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20 ">
      <div className="absolute -top-14 left-[50%]">
        <div className="w-[100px] h-[100px] relative left-[-50%] overflow-hidden rounded-[50%]">
          <Image
            src={author.photo.url}
            unoptimized
            alt={author.name}
            height={100}
            width={100}
            className="align-middle inline my-0 mx-auto h-[100%]"
          />
        </div>
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
