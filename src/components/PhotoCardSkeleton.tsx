import ImageSkeleton from "./ImageSkeleton";

export default function PhotoCardSkeleton() {
    return (
        <div className="flex flex-col items-center">
            <ImageSkeleton />
            <div className="mt-4 mb-2 skeleton w-24 h-6 rounded"></div>
            <div className="tex-sm skeleton w-16 h-5 rounded"></div>
        </div>
    );
}
