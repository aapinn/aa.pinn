"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "../../Pages/components/DarkModeToggle";
import { cn } from "@/lib/utils";
export var FloatingNav = function (_a) {
    var navItems = _a.navItems, className = _a.className;
    return (_jsxs("div", { className: cn("flex w-full fixed top-0 inset-x-0 mx-auto dark:bg-black shadow-sm dark:shadow-white/20 shadow-black/20 bg-white z-[5000] px-2 py-2 items-center justify-center space-x-4", className), children: [navItems.map(function (navItem, idx) { return (_jsxs(NavLink, { to: navItem.path, className: cn("relative hover:scale-150 duration-200 dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 p-2"), children: [_jsx("span", { className: "block md:hidden text-lg", children: navItem.icon }), _jsx("span", { className: "hidden md:block text-sm", children: navItem.name })] }, "link=".concat(idx))); }), _jsx("div", { className: "pl-7 block md:hidden", children: _jsx(DarkModeToggle, {}) })] }));
};
