"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../../Pages/components/DarkModeToggle.jsx";
const cn = (...classes) => classes.filter(Boolean).join(" ");
export const FloatingNav = ({ navItems, className }) => {
    return (_jsxs("div", { className: cn("flex w-full fixed top-0 inset-x-0 mx-auto dark:bg-black shadow-sm dark:shadow-white/20 shadow-black/20 bg-white z-[5000] px-5 py-2 items-center justify-between", className), children: [navItems.map((navItem, idx) => (_jsxs(NavLink, { to: navItem.path, className: () => cn("relative hover:scale-150 duration-200 dark:text-neutral-50 items-center flex space-x-4 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 p-2"), children: [_jsx("span", { className: "block md:hidden text-lg ", children: navItem.icon }), _jsx("span", { className: "hidden md:block text-sm", children: navItem.name })] }, `link=${idx}`))),] }));
};
