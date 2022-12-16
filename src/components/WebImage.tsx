import clsx from "clsx";
import { useState } from "react";
import ImageSkeleton from "./ImageSkeleton";

type Props = {
    url: string;
    id: string;
};

export default function WebImage({ url, id }: Props) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div>
            {!loaded && <ImageSkeleton />}
            <img
                className={clsx(
                    "w-64 h-48 object-cover rounded hover:cursor-pointer",
                    loaded ? "" : "hidden"
                )}
                src={url}
                alt={id}
                onLoad={() => {
                    setLoaded(true);
                }}
            ></img>
        </div>
    );
}
