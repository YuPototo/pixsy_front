import { useState } from "react";
import PhotoGrid from "../components/PhotoGrid";
import TopicSelector from "../components/TopicSelector";
import TopNav from "../components/TopNav";
import TopSubNav from "../components/TopSubNav";
import { useGetPhotosQuery } from "../app/api";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { searchTermEntered } from "../app/photoListSlice";

export default function ImagePage() {
    const [showTopicSelector, setShowTopicSelector] = useState(false);

    const topic = useAppSelector((state) => state.photoList.topic);
    const searchTerm = useAppSelector((state) => state.photoList.searchTerm);

    // pagination is not implemented.
    // let limit = 100 to get all photos
    const { data: photos, isLoading } = useGetPhotosQuery({
        limit: 100,
        topic,
        searchTerm,
    });

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

            {!isLoading && photos && photos.length === 0 && (
                <NoPhotosHint topic={topic} searchTerm={searchTerm} />
            )}
        </div>
    );
}

function NoPhotosHint({
    topic,
    searchTerm,
}: {
    topic?: string;
    searchTerm?: string;
}) {
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="text-lg text-center text-red-500">
                No photos found.
            </div>
            {topic && (
                <div className="text-center">
                    Topic:{" "}
                    <span className="text-primary text-bold">{topic}</span>
                </div>
            )}
            {searchTerm && (
                <div className="text-center">
                    Search Keywords:{" "}
                    <span className="text-primary text-bold">{searchTerm}</span>
                </div>
            )}
            <div className="mt-4">
                <button
                    className="border-2 px-4 py-2 text-primary font-bold uppercase border-primary bg-white"
                    onClick={() => dispatch(searchTermEntered(""))}
                >
                    Clear Search
                </button>
            </div>
        </div>
    );
}
