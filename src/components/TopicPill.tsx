import clsx from "clsx";
import React from "react";

type Props = {
    topic: string;
    isSelected?: boolean;
    onClick: (topic: string) => void;
};

export default function TopicPill({ topic, isSelected, onClick }: Props) {
    return (
        <div
            className={clsx(
                "rounded-full px-4 py-1 hover:cursor-pointer",
                isSelected ? "bg-primary" : "bg-white",
                isSelected ? "text-white" : "text-gray-500"
            )}
            onClick={() => onClick(topic)}
        >
            {topic}
        </div>
    );
}
