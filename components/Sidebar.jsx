"use client";
import React, { useState } from "react";
import { Nav } from "./Navbar";
import {
  LayoutDashboard,
  Settings,
  ShoppingCart,
  User,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";

const Sidebar = () => {
  const [isCollapsed, setIsCollapser] = useState(true);
  const toggleSidebar = () => {
    setIsCollapser(!isCollapsed);
  };
  return (
    <div className="relative min-w-[80px]  border-r px-3 pt-24 pb-10">
      {" "}
      <div className=" absolute right-[-20px] top-7">
        {" "}
        <Button
          onClick={toggleSidebar}
          variant="secondary"
          className=" bg-slate-400 rounded-full p-2"
        >
          <ChevronRight />
        </Button>
      </div>
      <Nav
        isCollapsed={isCollapsed}
        links={[
          {
            title: "Dashboard",
            label: "128",
            path: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            label: "",
            path: "/user",
            icon: User,
            variant: "ghost",
          },
          {
            title: "Sales",
            label: "",
            path: "/sales",
            icon: ShoppingCart,
            variant: "ghost",
          },
         
        ]}
      />
    </div>
  );
};

export default Sidebar;
