import clsx from "clsx";

type Props = {
    selectedItem: "all" | "new" | "ignored";
};

export default function TopSubNav({ selectedItem }: Props) {
    return (
        <div className="flex place-content-center py-4">
            <div className="flex">
                <div
                    className={clsx(
                        "px-10 py-2 bg-white font-bold text-lg hover:cursor-pointer",
                        selectedItem === "all"
                            ? "text-primary border-b-2 border-primary"
                            : "text-gray-400"
                    )}
                >
                    All
                </div>
                <div
                    className={clsx(
                        "px-10 py-2 bg-white font-bold text-lg hover:cursor-pointer",
                        selectedItem === "new"
                            ? "text-primary border-b-2 border-primary"
                            : "text-gray-400"
                    )}
                >
                    New
                </div>
                <div
                    className={clsx(
                        "px-10 py-2 bg-white font-bold text-lg hover:cursor-pointer",
                        selectedItem === "ignored"
                            ? "text-primary border-b-2 border-primary"
                            : "text-gray-400"
                    )}
                >
                    Ignored
                </div>
            </div>
        </div>
    );
}
