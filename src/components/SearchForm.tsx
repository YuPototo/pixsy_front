import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState, useRef } from "react";
import { useAppDispatch } from "../app/hooks";
import { searchTermEntered } from "../app/photoListSlice";

export default function SearchForm() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const dispatch = useAppDispatch();

    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className="w-96 flex justify-center items-center mx-auto">
            <MagnifyingGlassIcon className="h-4 w-4 -mr-9 z-10 text-gray-500 " />
            <input
                className="pl-12 w-full h-8 rounded-full text-gray-800 "
                placeholder="Search topic, description and user"
                ref={ref}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        dispatch(searchTermEntered(e.currentTarget.value));
                        setSearchTerm("");
                        ref.current?.blur();
                    }
                }}
            ></input>
        </div>
    );
}
