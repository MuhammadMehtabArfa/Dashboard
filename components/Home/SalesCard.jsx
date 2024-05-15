"use client";
import React from "react";

const SalesCard = ({ name, email, amount }) => {
  return (
    <div className="w-full">
      {/* image */}
      <div></div>
      {/* rest */}
      <div className="flex justify-between gap-3 flex-wrap">
        <section className="flex justify-between gap-3">
          <div className="h-12 w-12 bg-slate-400 rounded-full p-1">
            <img
              width={200}
              height={200}
              src="https://api.dicebear.com/8.x/lorelei/svg?seed=Pepper"
              alt="avatar"
            />
          </div>
          <div className="flex-col">
            <h1>{name}</h1>
            <h1 className=" text-ellipsis overflow-hidden  w-[120px] sm:w-auto text-gray-400">
              {email}
            </h1>
          </div>
        </section>

        <div>
          <h1>{amount}</h1>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
