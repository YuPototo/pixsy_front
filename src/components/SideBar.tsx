import SideBarItem from "./SideBarItem";
import {
    PhotoIcon,
    Square3Stack3DIcon,
    BriefcaseIcon,
    BoltIcon,
    GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/solid";
import { ISideBarItem } from "../types";
import { Link } from "react-router-dom";

type Props = {
    activeItem: ISideBarItem;
};

export default function SideBar({ activeItem }: Props) {
    return (
        <div className="h-screen border-r-2 border-white w-40 flex flex-col  items-center gap-10 pt-4">
            <Link to="/">
                <img className="w-24" src="./Brand.webp" alt="brand"></img>
            </Link>
            <div className="flex flex-col gap-6">
                <SideBarItem
                    title="MATCHES"
                    isSelected={activeItem === "matches"}
                >
                    <Square3Stack3DIcon />
                </SideBarItem>
                <SideBarItem
                    title="IMAGES"
                    isSelected={activeItem === "images"}
                >
                    <PhotoIcon />
                </SideBarItem>
                <SideBarItem title="CASES" isSelected={activeItem === "cases"}>
                    <BriefcaseIcon />
                </SideBarItem>
                <SideBarItem
                    title="TAKEDOWNS"
                    isSelected={activeItem === "takedowns"}
                >
                    <BoltIcon />
                </SideBarItem>
                <SideBarItem
                    title="REGISTER"
                    isSelected={activeItem === "register"}
                >
                    <GlobeEuropeAfricaIcon />
                </SideBarItem>
            </div>
        </div>
    );
}
