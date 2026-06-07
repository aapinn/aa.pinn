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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { enrichTweet, } from "react-tweet";
import { getTweet } from "react-tweet/api";
import { cn } from "@/lib/utils";
var Twitter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("svg", __assign({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0", viewBox: "0 0 24 24", height: "1em", width: "1em", xmlns: "http://www.w3.org/2000/svg", className: className }, props, { children: _jsxs("g", { children: [_jsx("path", { fill: "none", d: "M0 0h24v24H0z" }), _jsx("path", { d: "M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" })] }) })));
};
var Verified = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("svg", __assign({ "aria-label": "Verified Account", viewBox: "0 0 24 24", className: className }, props, { children: _jsx("g", { fill: "currentColor", children: _jsx("path", { d: "M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" }) }) })));
};
export var truncate = function (str, length) {
    if (!str || str.length <= length)
        return str;
    return "".concat(str.slice(0, length - 3), "...");
};
var Skeleton = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("div", __assign({ className: cn("rounded-md bg-primary/10", className) }, props)));
};
export var TweetSkeleton = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsxs("div", __assign({ className: cn("flex size-full max-h-max min-w-72 flex-col gap-2 rounded-lg border p-4", className) }, props, { children: [_jsxs("div", { className: "flex flex-row gap-2", children: [_jsx(Skeleton, { className: "size-10 shrink-0 rounded-full" }), _jsx(Skeleton, { className: "h-10 w-full" })] }), _jsx(Skeleton, { className: "h-20 w-full" })] })));
};
export var TweetNotFound = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (_jsx("div", __assign({ className: cn("flex size-full flex-col items-center justify-center gap-2 rounded-lg border p-4", className) }, props, { children: _jsx("h3", { children: "Tweet not found" }) })));
};
export var TweetHeader = function (_a) {
    var tweet = _a.tweet;
    return (_jsxs("div", { className: "flex flex-row justify-between tracking-tight", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("a", { href: tweet.user.url, target: "_blank", rel: "noreferrer", children: _jsx("img", { title: "Profile picture of ".concat(tweet.user.name), alt: tweet.user.screen_name, height: 48, width: 48, src: tweet.user.profile_image_url_https, className: "overflow-hidden rounded-full border border-transparent" }) }), _jsxs("div", { children: [_jsxs("a", { href: tweet.user.url, target: "_blank", rel: "noreferrer", className: "flex items-center whitespace-nowrap font-semibold", children: [truncate(tweet.user.name, 20), tweet.user.verified ||
                                        (tweet.user.is_blue_verified && (_jsx(Verified, { className: "ml-1 inline size-4 text-blue-500" })))] }), _jsx("div", { className: "flex items-center space-x-1", children: _jsxs("a", { href: tweet.user.url, target: "_blank", rel: "noreferrer", className: "text-sm text-gray-500 transition-all duration-75", children: ["@", truncate(tweet.user.screen_name, 16)] }) })] })] }), _jsx("a", { href: tweet.url, target: "_blank", rel: "noreferrer ", className: "border h-fit p-2 rounded-2xl hover:scale-105 hover:bg-textik,-400 duration-300", children: _jsxs("span", { className: "sr-only flex items-center gap-2 ", children: ["Link to tweet ", _jsx(Twitter, { className: "size-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105" })] }) })] }));
};
export var TweetBody = function (_a) {
    var tweet = _a.tweet;
    return (_jsx("div", { className: "break-words leading-normal tracking-tighter", children: tweet.entities.map(function (entity, idx) {
            switch (entity.type) {
                case "url":
                case "symbol":
                case "hashtag":
                case "mention":
                    return (_jsx("a", { href: entity.href, target: "_blank", rel: "noopener noreferrer", className: "text-sm font-normal text-gray-500", children: _jsx("span", { children: entity.text }) }, idx));
                case "text":
                    return (_jsx("span", { className: "text-sm font-normal", dangerouslySetInnerHTML: { __html: entity.text } }, idx));
            }
        }) }));
};
export var TweetMedia = function (_a) {
    var _b, _c, _d;
    var tweet = _a.tweet;
    return (_jsxs("div", { className: "flex flex-1 items-center justify-center", children: [tweet.video && (_jsxs("video", { poster: tweet.video.poster, autoPlay: true, loop: true, muted: true, playsInline: true, className: "rounded-xl border shadow-sm", children: [_jsx("source", { src: tweet.video.variants[0].src, type: "video/mp4" }), "Your browser does not support the video tag."] })), tweet.photos && (_jsxs("div", { className: "relative flex transform-gpu snap-x snap-mandatory overflow-x-auto", children: [_jsx("div", { className: "shrink-0 snap-center sm:w-2 " }), tweet.photos.map(function (photo) { return (_jsx("img", { src: photo.url, title: "Photo by " + tweet.user.name, alt: tweet.text, className: "h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm" }, photo.url)); }), _jsx("div", { className: "shrink-0 snap-center sm:w-2" })] })), !tweet.video &&
                !tweet.photos &&
                (
                // @ts-ignore
                (_d = (_c = (_b = tweet === null || tweet === void 0 ? void 0 : tweet.card) === null || _b === void 0 ? void 0 : _b.binding_values) === null || _c === void 0 ? void 0 : _c.thumbnail_image_large) === null || _d === void 0 ? void 0 : _d.image_value.url) && (_jsx("img", { 
                // @ts-ignore
                src: tweet.card.binding_values.thumbnail_image_large.image_value.url, className: "h-64 rounded-xl border object-cover shadow-sm" }))] }));
};
export var MagicTweet = function (_a) {
    var tweet = _a.tweet, components = _a.components, className = _a.className, props = __rest(_a, ["tweet", "components", "className"]);
    var enrichedTweet = enrichTweet(tweet);
    return (_jsxs("div", __assign({ className: cn("relative flex size-full max-w-lg bg-white dark:bg-transparent flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md", className) }, props, { children: [_jsx(TweetHeader, { tweet: enrichedTweet }), _jsx(TweetBody, { tweet: enrichedTweet }), _jsx(TweetMedia, { tweet: enrichedTweet })] })));
};
/**
 * TweetCard (Server Side Only)
 */
export var TweetCard = function (_a) { return __awaiter(void 0, void 0, void 0, function () {
    var tweet, _b, NotFound;
    var id = _a.id, components = _a.components, _c = _a.fallback, fallback = _c === void 0 ? _jsx(TweetSkeleton, {}) : _c, onError = _a.onError, props = __rest(_a, ["id", "components", "fallback", "onError"]);
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!id) return [3 /*break*/, 2];
                return [4 /*yield*/, getTweet(id).catch(function (err) {
                        if (onError) {
                            onError(err);
                        }
                        else {
                            console.error(err);
                        }
                    })];
            case 1:
                _b = _d.sent();
                return [3 /*break*/, 3];
            case 2:
                _b = undefined;
                _d.label = 3;
            case 3:
                tweet = _b;
                if (!tweet) {
                    NotFound = (components === null || components === void 0 ? void 0 : components.TweetNotFound) || TweetNotFound;
                    return [2 /*return*/, _jsx(NotFound, __assign({}, props))];
                }
                return [2 /*return*/, (_jsx(Suspense, { fallback: fallback, children: _jsx(MagicTweet, __assign({ tweet: tweet }, props)) }))];
        }
    });
}); };
export default TweetCard;
