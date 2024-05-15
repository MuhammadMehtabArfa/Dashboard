"use client";
import React from "react";
import Card from "./Card";
import { ResponsiveContainer, BarChart, XAxis, Bar, YAxis } from "recharts";
import { LayoutDashboard } from "lucide-react";
import SalesCard from "./SalesCard";
const Main = () => {
  const barData = [
    { name: "Jan", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Feb", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Mar", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Apr", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "May", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Jun", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Jul", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Aug", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Sep", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Oct", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Nov", total: Math.floor(Math.random() * 5000) + 1000 },
    { name: "Dec", total: Math.floor(Math.random() * 5000) + 1000 },
  ];
  const SaleData = [
    { name: "John Doe", email: "john@example.com", amount: "$50000" },
    { name: "Jane Smith", email: "jane@example.com", amount: "$50000" },
    { name: "Alice Johnson", email: "alice@example.com", amount: "$50000" },
    { name: "Bob Brown", email: "bob@example.com", amount: "$50000" },
    { name: "Emma Wilson", email: "emma@example.com", amount: "$50000" },
    { name: "Michael Lee", email: "michael@example.com", amount: "$50000" },
    { name: "Sarah Taylor", email: "sarah@example.com", amount: "$50000" },
    { name: "David Clark", email: "david@example.com", amount: "$50000" },
    { name: "Laura Martinez", email: "laura@example.com", amount: "$50000" },
    { name: "Kevin Rodriguez", email: "kevin@example.com", amount: "$50000" },
    { name: "Olivia Garcia", email: "olivia@example.com", amount: "$50000" },
    { name: "Daniel Hernandez", email: "daniel@example.com", amount: "$50000" },
  ];

  const cardsData = [
    {
      name: "Deposited amount",
      icon: LayoutDashboard,
      amount: "$100",
      description: "Description for Card 1",
    },
    {
      name: "Statement",
      icon: LayoutDashboard,
      amount: "$200",
      description: "Description for Card 2",
    },
    {
      name: "Received Amount",
      icon: LayoutDashboard,
      amount: "$300",
      description: "Description for Card 3",
    },
    {
      name: "Pending Clearance",
      icon: LayoutDashboard,
      amount: "$400",
      description: "Description for Card 4",
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-lg">Dashboard</h1>
      {/* cards */}
      <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-4 gap-5 grid-col-1">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      {/* chart */}

      <section className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-2">
        <div className="w-full h-[410px]  border p-4 shadow-black  shadow-sm rounded-lg">
          <h1 className="font-bold text-lg pb-5">BarChart</h1>
          <ResponsiveContainer width={"100%"} height={350}>
            <BarChart data={barData}>
              <XAxis
                dataKey={"name"}
                fontSize={12}
                stroke="black"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                fontSize={12}
                stroke="black"
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Bar dataKey={"total"} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className=" w-[100%] border rounded-lg p-4 h-[410px] overflow-auto ThinScrollbar shadow shadow-black">
          <div className="w-full">
            <p className="font-bold text-lg pb-5">Recent Sales</p>
            <h1 className="text:sm text-gray-400">
              You have made 30 sales this month
            </h1>
          </div>
          <div className="w-full flex flex-col items-center gap-3 justify-start">
            {" "}
            {SaleData.map((data, index) => (
              <SalesCard
                name={data.name}
                amount={data.amount}
                email={data.email}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
