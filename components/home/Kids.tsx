import Image from "next/image";
import React from "react";

const Kids = () => {
  return (
    <div className="w-full border rounded-md  h-[250px] flex gap-1 justify-between">
      <div className="flex justify-center items-center w-[60%]">
        <div className="px-5">
          <h1 className="font-sans text-4xl font-bold mb-3">Kids</h1>
          <p className="text-slate-500 w-full">
            Discover the Latest Styles in Our Chic and Elegant Women Fashion
            Collection
          </p>
          <button className="bg-black text-white px-3 py-1 rounded-md mt-3">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-[40%] h-full">
        <Image
          className="rounded-md h-full"
          src="/images/mens.png"
          alt="Mens Fashion"
          width={300}
          height={250}
        />
      </div>
    </div>
  );
};

export default Kids;


