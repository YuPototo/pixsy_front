import clsx from "clsx";
import { Link } from "react-router-dom";

type Props = {
    children: React.ReactNode;
    title: string;
    isSelected?: boolean;
};

export default function SideBarItem({
    children,
    title,
    isSelected = false,
}: Props) {
    return (
        <Link
            to={`/${title.toLowerCase()}`}
            className={clsx(
                "flex flex-col gap-2 items-center",
                isSelected ? "text-primary" : "text-gray-400"
            )}
        >
            <div className="w-10 h-10 ">{children}</div>
            <div className="font-semibold">{title}</div>
        </Link>
    );
}
