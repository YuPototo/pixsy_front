import { IPhoto } from "../types";
import PhotoCard from "./PhotoCard";
import PhotoCardSkeleton from "./PhotoCardSkeleton";

type Props = {
    photos?: IPhoto[];
    isLoading: boolean;
};

export default function PhotoGrid({ photos, isLoading }: Props) {
    return (
        <div className="mt-10 mx-32 flex flex-wrap gap-16 justify-center">
            {isLoading &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <PhotoCardSkeleton key={i} />
                ))}
            {!isLoading &&
                photos &&
                photos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo}></PhotoCard>
                ))}
        </div>
    );
}
