"use client";
import React from "react";
import { FloatingNav } from "../../Components/ui/floating-navbar";
import { navLinks } from "../../data";
const FloatingNavbar= ()=> {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navLinks} />
    </div>
  );
}
export default FloatingNavbar
