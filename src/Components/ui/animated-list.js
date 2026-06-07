"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export var AnimatedList = React.memo(function (_a) {
    var className = _a.className, children = _a.children, _b = _a.delay, delay = _b === void 0 ? 1000 : _b;
    var _c = useState(0), index = _c[0], setIndex = _c[1];
    var childrenArray = React.Children.toArray(children);
    useEffect(function () {
        var interval = setInterval(function () {
            setIndex(function (prevIndex) { return (prevIndex + 1) % childrenArray.length; });
        }, delay);
        return function () { return clearInterval(interval); };
    }, [childrenArray.length, delay]);
    var itemsToShow = useMemo(function () { return childrenArray.slice(0, index + 1).reverse(); }, [index, childrenArray]);
    return (_jsx("div", { className: "flex flex-col items-center gap-4 ".concat(className), children: _jsx(AnimatePresence, { children: itemsToShow.map(function (item) { return (_jsx(AnimatedListItem, { children: item }, item.key)); }) }) }));
});
AnimatedList.displayName = "AnimatedList";
export function AnimatedListItem(_a) {
    var children = _a.children;
    var animations = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1, originY: 0 },
        exit: { scale: 0, opacity: 0 },
        transition: { type: "spring", stiffness: 350, damping: 40 },
    };
    return (_jsx(motion.div, __assign({}, animations, { layout: true, className: "mx-auto w-full", children: children })));
}
