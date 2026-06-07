"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useTweet } from "react-tweet";
import { MagicTweet, TweetNotFound, TweetSkeleton, } from "@/Components/magicui/TweetCard";
const ClientTweetCard = ({ id, apiUrl, fallback = _jsx(TweetSkeleton, {}), components, fetchOptions, onError, ...props }) => {
    const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions);
    if (isLoading)
        return fallback;
    if (error || !data) {
        const NotFound = components?.TweetNotFound || TweetNotFound;
        return _jsx(NotFound, { error: onError ? onError(error) : error });
    }
    return _jsx(MagicTweet, { tweet: data, components: components, ...props, className: "my-5" });
};
export default ClientTweetCard;
