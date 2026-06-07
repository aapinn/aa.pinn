"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export const AnimatedList = React.memo(({ className, children, delay = 1000 }) => {
    const [index, setIndex] = useState(0);
    const childrenArray = React.Children.toArray(children);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
        }, delay);
        return () => clearInterval(interval);
    }, [childrenArray.length, delay]);
    const itemsToShow = useMemo(() => childrenArray.slice(0, index + 1).reverse(), [index, childrenArray]);
    return (_jsx("div", { className: `flex flex-col items-center gap-4 ${className}`, children: _jsx(AnimatePresence, { children: itemsToShow.map((item) => (_jsx(AnimatedListItem, { children: item }, item.key))) }) }));
});
AnimatedList.displayName = "AnimatedList";
export function AnimatedListItem({ children }) {
    const animations = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1, originY: 0 },
        exit: { scale: 0, opacity: 0 },
        transition: { type: "spring", stiffness: 350, damping: 40 },
    };
    return (_jsx(motion.div, { ...animations, layout: true, className: "mx-auto w-full", children: children }));
}
