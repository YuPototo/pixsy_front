import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
type Props = {};

export default function SearchForm({}: Props) {
    return (
        <div className="w-96 flex justify-center items-center mx-auto">
            <MagnifyingGlassIcon className="h-4 w-4 -mr-9 z-10 text-gray-500 " />
            <input
                className="pl-12 w-full h-8 rounded-full"
                placeholder="Search topic, description and user"
            ></input>
        </div>
    );
}
