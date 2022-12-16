import React from "react";
import TopicPill from "./TopicPill";

type Props = {};

export default function TopicSelector({}: Props) {
    return (
        <div className="flex gap-4 flex-wrap mx-10 mt-2">
            <TopicPill topic="topic 1" isSelected={true} />
            <TopicPill topic="topic 2" />
            <TopicPill topic="topic 3" />
            <TopicPill topic="topic 2" />
            <TopicPill topic="topic 3" />
            <TopicPill topic="topic 2" />
            <TopicPill topic="topic 3" />
            <TopicPill topic="topic 2" />
            <TopicPill topic="topic 3" />
            <TopicPill topic="topic 2" />
            <TopicPill topic="topic 3" />
        </div>
    );
}
