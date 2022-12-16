import { useState } from "react";
import TopicSelector from "../components/TopicSelector";
import TopNav from "../components/TopNav";
import TopSubNav from "../components/TopSubNav";

export default function ImagePage() {
    const [showTopicSelector, setShowTopicSelector] = useState(false);

    return (
        <div className="">
            <TopNav />
            <TopSubNav selectedItem="all" />
            {showTopicSelector ? (
                <TopicSelector />
            ) : (
                <div
                    className="text-primary hover:cursor-pointer text-center"
                    onClick={() => setShowTopicSelector(true)}
                >
                    select topics
                </div>
            )}
        </div>
    );
}
