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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../../../lib/utils";
import { useEffect, useState, useRef } from "react";
var getRandomStartPoint = function () {
    var side = Math.floor(Math.random() * 4);
    var offset = Math.random() * window.innerWidth;
    switch (side) {
        case 0:
            return { x: offset, y: 0, angle: 45 };
        case 1:
            return { x: window.innerWidth, y: offset, angle: 135 };
        case 2:
            return { x: offset, y: window.innerHeight, angle: 225 };
        case 3:
            return { x: 0, y: offset, angle: 315 };
        default:
            return { x: 0, y: 0, angle: 45 };
    }
};
export var ShootingStars = function (_a) {
    var _b = _a.minSpeed, minSpeed = _b === void 0 ? 10 : _b, _c = _a.maxSpeed, maxSpeed = _c === void 0 ? 30 : _c, _d = _a.minDelay, minDelay = _d === void 0 ? 1200 : _d, _e = _a.maxDelay, maxDelay = _e === void 0 ? 4200 : _e, _f = _a.starColor, starColor = _f === void 0 ? "#9E00FF" : _f, _g = _a.trailColor, trailColor = _g === void 0 ? "#2EB9DF" : _g, _h = _a.starWidth, starWidth = _h === void 0 ? 10 : _h, _j = _a.starHeight, starHeight = _j === void 0 ? 1 : _j, className = _a.className;
    var _k = useState(null), star = _k[0], setStar = _k[1];
    var svgRef = useRef(null);
    useEffect(function () {
        var createStar = function () {
            var _a = getRandomStartPoint(), x = _a.x, y = _a.y, angle = _a.angle;
            var newStar = {
                id: Date.now(),
                x: x,
                y: y,
                angle: angle,
                scale: 1,
                speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
                distance: 0,
            };
            setStar(newStar);
            var randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
            setTimeout(createStar, randomDelay);
        };
        createStar();
        return function () { };
    }, [minSpeed, maxSpeed, minDelay, maxDelay]);
    useEffect(function () {
        var moveStar = function () {
            if (star) {
                setStar(function (prevStar) {
                    if (!prevStar)
                        return null;
                    var newX = prevStar.x +
                        prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
                    var newY = prevStar.y +
                        prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
                    var newDistance = prevStar.distance + prevStar.speed;
                    var newScale = 1 + newDistance / 100;
                    if (newX < -20 ||
                        newX > window.innerWidth + 20 ||
                        newY < -20 ||
                        newY > window.innerHeight + 20) {
                        return null;
                    }
                    return __assign(__assign({}, prevStar), { x: newX, y: newY, distance: newDistance, scale: newScale });
                });
            }
        };
        var animationFrame = requestAnimationFrame(moveStar);
        return function () { return cancelAnimationFrame(animationFrame); };
    }, [star]);
    return (_jsxs("svg", { ref: svgRef, className: cn("w-full h-full absolute inset-0", className), children: [star && (_jsx("rect", { x: star.x, y: star.y, width: starWidth * star.scale, height: starHeight, fill: "url(#gradient)", transform: "rotate(".concat(star.angle, ", ").concat(star.x + (starWidth * star.scale) / 2, ", ").concat(star.y + starHeight / 2, ")") }, star.id)), _jsx("defs", { children: _jsxs("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [_jsx("stop", { offset: "0%", style: { stopColor: trailColor, stopOpacity: 0 } }), _jsx("stop", { offset: "100%", style: { stopColor: starColor, stopOpacity: 1 } })] }) })] }));
};
