import React from "react";
import { useGetTopicsQuery } from "../app/api";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import TopicPill from "./TopicPill";
import TopicPillSkeleton from "./TopicPillSkeleton";
import { topicSelected } from "../app/photoListSlice";

export default function TopicSelector() {
    const { data: topics, isLoading } = useGetTopicsQuery();
    const dispatch = useAppDispatch();
    const topicNow = useAppSelector((state) => state.photoList.topic);

    const handleClickTopic = (topic: string) => {
        dispatch(topicSelected(topic));
    };

    return (
        <div className="flex gap-4 flex-wrap mx-10 mt-2 justify-center">
            {isLoading &&
                [...Array(8)].map((_, i) => <TopicPillSkeleton key={i} />)}
            {topics?.map((topic) => (
                <TopicPill
                    key={topic}
                    topic={topic}
                    isSelected={topicNow === topic}
                    onClick={handleClickTopic}
                />
            ))}
        </div>
    );
}
