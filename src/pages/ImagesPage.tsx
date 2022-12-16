import { useState } from "react";
import PhotoGrid from "../components/PhotoGrid";
import TopicSelector from "../components/TopicSelector";
import TopNav from "../components/TopNav";
import TopSubNav from "../components/TopSubNav";
import { useGetPhotosQuery } from "../app/api";

export default function ImagePage() {
    const [showTopicSelector, setShowTopicSelector] = useState(false);

    const { data: photos, isLoading } = useGetPhotosQuery();

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

            <PhotoGrid photos={photos} isLoading={isLoading} />
        </div>
    );
}
