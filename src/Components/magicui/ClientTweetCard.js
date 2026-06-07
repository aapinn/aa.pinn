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
import { jsx as _jsx } from "react/jsx-runtime";
import { useTweet } from "react-tweet";
import { MagicTweet, TweetNotFound, TweetSkeleton, } from "@/Components/magicui/TweetCard";
var ClientTweetCard = function (_a) {
    var id = _a.id, apiUrl = _a.apiUrl, _b = _a.fallback, fallback = _b === void 0 ? _jsx(TweetSkeleton, {}) : _b, components = _a.components, fetchOptions = _a.fetchOptions, onError = _a.onError, props = __rest(_a, ["id", "apiUrl", "fallback", "components", "fetchOptions", "onError"]);
    var _c = useTweet(id, apiUrl, fetchOptions), data = _c.data, error = _c.error, isLoading = _c.isLoading;
    if (isLoading)
        return fallback;
    if (error || !data) {
        var NotFound = (components === null || components === void 0 ? void 0 : components.TweetNotFound) || TweetNotFound;
        return _jsx(NotFound, { error: onError ? onError(error) : error });
    }
    return _jsx(MagicTweet, __assign({ tweet: data, components: components }, props, { className: "my-5" }));
};
export default ClientTweetCard;
