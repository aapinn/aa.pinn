"use client";
import { NavLink } from "react-router-dom";
const cn = (...classes: Array<string | undefined | null | false>) =>
  classes.filter((c): c is string => Boolean(c)).join(" ");

export const FloatingNav = ({ navItems, className } : { navItems: any[], className?: string }) => {
  return (
    <div
      className={cn(
        "flex w-full fixed top-0 inset-x-0 mx-auto  dark:bg-black shadow-sm dark:shadow-white/20 shadow-black/20 bg-white z-[5000] px-5 py-2 items-center justify-between ",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <NavLink
          key={`link=${idx}`}
          to={navItem.path}
          className={() => cn(
            "relative hover:scale-125 duration-200 dark:text-neutral-50 items-center flex text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 p-2"
          )}
        >
          <span className="block md:hidden text-lg">{navItem.icon}</span>
          <span className="hidden md:block text-sm">{navItem.name}</span>
        </NavLink>
      ))}

    </div>
  );
};
