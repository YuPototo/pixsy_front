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

    const { data: photos, isLoading } = useGetPhotosQuery({
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

            {searchTerm && <SearchInfo />}

            <PhotoGrid photos={photos} isLoading={isLoading} />

            {!isLoading && photos && photos.length === 0 && (
                <div className="text-lg text-center text-red-500">
                    No photos found.
                </div>
            )}
        </div>
    );
}

function SearchInfo() {
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.photoList.searchTerm);

    return (
        <div className="text-center font-sm text-gray-600 mt-6 mb-6 flex items-center gap-4 justify-center">
            <div>
                Search Term: <span className="font-bold">{searchTerm}</span>
            </div>
            <button
                className="border px-2 py-1 text-primary border-primary "
                onClick={() => dispatch(searchTermEntered(""))}
            >
                Clear Search
            </button>
        </div>
    );
}
