"use client";
import React from "react";
import Image from "next/image";

const Card = ({ name, amount, description }) => {
  return (
    <div className="shadow p-3 border rounded-md w-[200px] overflow-hidden shadow-black bg-gray-100 ">
      {" "}
      {/* Added default styling */}
      <section className="flex pb-2 justify-between items-center">
        {" "}
        {/* Added `items-center` for vertical alignment */}
        <h1 className="font-bold">{name}</h1>
       
        {/* Render icon only if provided */}
      </section>
      <section className="">
        <h1 className=" underline">{amount}</h1>
        <h2>{description}</h2>
      </section>
    </div>
  );
};

export default Card;
