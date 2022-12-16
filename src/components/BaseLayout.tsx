import React from "react";
import { ISideBarItem } from "../types";
import SideBar from "./SideBar";

type Props = {
    children: React.ReactNode;
    activeSideBar: ISideBarItem;
};

export default function BaseLayout({ children, activeSideBar }: Props) {
    return (
        <div className="bg-gray-100 h-screen flex">
            <SideBar activeItem={activeSideBar} />
            <div className="flex-grow">{children}</div>
        </div>
    );
}
