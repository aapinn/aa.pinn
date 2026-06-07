"use client";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../../Pages/components/DarkModeToggle";
import { cn } from "@/lib/utils";

export const FloatingNav = ({navItems, className}) => {
  return (
    <div
      className={cn(
        "flex w-full fixed top-0 inset-x-0 mx-auto dark:bg-black shadow-sm dark:shadow-white/20 shadow-black/20 bg-white z-[5000] px-2 py-2 items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <NavLink
          key={`link=${idx}`}
          to={navItem.path}
          className={cn(
            "relative hover:scale-150 duration-200 dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 p-2"
          )}
        >
          <span className="block md:hidden text-lg">{navItem.icon}</span>
          <span className="hidden md:block text-sm">{navItem.name}</span>
        </NavLink>
      ))}
      <div className="pl-7 block md:hidden">
        <DarkModeToggle />
      </div>
    </div>
  );
};
