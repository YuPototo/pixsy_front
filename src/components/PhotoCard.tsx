import React from "react";
import { IPhoto } from "../types";
import WebImage from "./WebImage";

type Props = {
    photo: IPhoto;
};

export default function PhotoCard({ photo }: Props) {
    return (
        <div className="flex flex-col items-center">
            <WebImage url={photo.url} id={photo.id} />
            <div className="mt-4 mb-1 text-gray-800">{photo.id}</div>
            {/* Matches should be returned by server */}
            <div className="tex-sm text-gray-400">{randomNumber()} Matches</div>
        </div>
    );
}

function randomNumber() {
    return Math.floor(Math.random() * 100);
}
