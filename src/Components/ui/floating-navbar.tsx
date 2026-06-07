"use client";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "../../Pages/components/DarkModeToggle";
import { cn } from "@/lib/utils";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import logo from "../../image/LogoBrand.png";

export const FloatingNav = ({navItems, className}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <div
        className={cn(
          "flex w-full fixed top-0 inset-x-0 mx-auto dark:bg-black/80 bg-white/80 backdrop-blur-md shadow-sm dark:shadow-white/10 shadow-black/10 z-[5000] px-4 py-2.5 items-center justify-between",
          className
        )}
      >
        <button
          onClick={() => setOpen(true)}
          className="p-2 -ml-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
          aria-label="Open menu"
        >
          <HiMenuAlt2 className="text-xl" />
        </button>
        <div className="flex items-center gap-2">
          <img src={logo} alt="arif" className="w-7 h-7 rounded-full" />
        </div>
        <DarkModeToggle />
      </div>

      {/* Slide-in menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 z-[10000] w-64 max-w-[80vw] bg-white dark:bg-neutral-900 shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700">
                <div className="flex items-center gap-2.5">
                  <img src={logo} alt="arif" className="w-9 h-9 rounded-full" />
                  <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">Arif Rahman</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 transition-colors"
                  aria-label="Close menu"
                >
                  <IoClose className="text-xl" />
                </button>
              </div>
              <div className="p-3 flex flex-col gap-1">
                {navItems.map((navItem, idx) => (
                  <NavLink
                    key={idx}
                    to={navItem.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium"
                          : "text-neutral-700 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      }`
                    }
                  >
                    <span className="text-lg">{navItem.icon}</span>
                    {navItem.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
