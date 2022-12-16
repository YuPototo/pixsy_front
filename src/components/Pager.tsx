import clsx from "clsx";
import React from "react";

type Props = {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    pageNumber: number;
    onToNextPage: () => void;
    onToPreviousPage: () => void;
};

export default function Pager({
    hasPreviousPage,
    hasNextPage,
    pageNumber,
    onToNextPage,
    onToPreviousPage,
}: Props) {
    return (
        <div className="flex items-center justify-center mt-10 gap-16">
            <button
                className={clsx(
                    "border px-2 py-1 text-primary border-primary",
                    !hasPreviousPage && "invisible"
                )}
                onClick={onToPreviousPage}
            >
                Last Page
            </button>
            <div className="text-primary">Page {pageNumber}</div>
            <button
                className={clsx(
                    "border px-2 py-1 text-primary border-primary",
                    !hasNextPage && "invisible"
                )}
                onClick={onToNextPage}
            >
                Next Page
            </button>
        </div>
    );
}
