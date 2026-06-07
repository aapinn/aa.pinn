"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../../../lib/utils";
import { useState, useEffect, useRef, useCallback, } from "react";
export var StarsBackground = function (_a) {
    var _b = _a.starDensity, starDensity = _b === void 0 ? 0.00015 : _b, _c = _a.allStarsTwinkle, allStarsTwinkle = _c === void 0 ? true : _c, _d = _a.twinkleProbability, twinkleProbability = _d === void 0 ? 0.7 : _d, _e = _a.minTwinkleSpeed, minTwinkleSpeed = _e === void 0 ? 0.5 : _e, _f = _a.maxTwinkleSpeed, maxTwinkleSpeed = _f === void 0 ? 1 : _f, className = _a.className;
    var _g = useState([]), stars = _g[0], setStars = _g[1];
    var canvasRef = useRef(null);
    var generateStars = useCallback(function (width, height) {
        var area = width * height;
        var numStars = Math.floor(area * starDensity);
        return Array.from({ length: numStars }, function () {
            var shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
            return {
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 0.05 + 0.5,
                opacity: Math.random() * 0.5 + 0.5,
                twinkleSpeed: shouldTwinkle
                    ? minTwinkleSpeed +
                        Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
                    : null,
            };
        });
    }, [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed,
    ]);
    useEffect(function () {
        var updateStars = function () {
            if (canvasRef.current) {
                var canvas = canvasRef.current;
                var ctx = canvas.getContext("2d");
                if (!ctx)
                    return;
                var _a = canvas.getBoundingClientRect(), width = _a.width, height = _a.height;
                canvas.width = width;
                canvas.height = height;
                setStars(generateStars(width, height));
            }
        };
        updateStars();
        var resizeObserver = new ResizeObserver(updateStars);
        if (canvasRef.current) {
            resizeObserver.observe(canvasRef.current);
        }
        return function () {
            if (canvasRef.current) {
                resizeObserver.unobserve(canvasRef.current);
            }
        };
    }, [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed,
        generateStars,
    ]);
    useEffect(function () {
        var canvas = canvasRef.current;
        if (!canvas)
            return;
        var ctx = canvas.getContext("2d");
        if (!ctx)
            return;
        var animationFrameId;
        var render = function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(function (star) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 255, 255, ".concat(star.opacity, ")");
                ctx.fill();
                if (star.twinkleSpeed !== null) {
                    star.opacity =
                        0.5 +
                            Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
                }
            });
            animationFrameId = requestAnimationFrame(render);
        };
        render();
        return function () {
            cancelAnimationFrame(animationFrameId);
        };
    }, [stars]);
    return (_jsx("canvas", { ref: canvasRef, className: cn("h-full w-full absolute inset-0", className) }));
};
