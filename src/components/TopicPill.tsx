import clsx from "clsx";
import React from "react";

type Props = {
    topic: string;
    isSelected?: boolean;
};

export default function TopicPill({ topic, isSelected }: Props) {
    return (
        <div
            className={clsx(
                "rounded-full px-4 py-1 hover:cursor-pointer",
                isSelected ? "bg-primary" : "bg-white",
                isSelected ? "text-white" : "text-gray-500"
            )}
        >
            {topic}
        </div>
    );
}
