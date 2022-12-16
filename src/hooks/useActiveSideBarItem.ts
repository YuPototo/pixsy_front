import { useLocation } from "react-router-dom";

/**
 * Get active side bar item name from url path
 */
export default function useActiveSideBarItem() {
    let location = useLocation();

    // remove slash from the beginning of the path
    if (
        location &&
        location.pathname &&
        location.pathname.length > 1 &&
        location.pathname[0] === "/"
    ) {
        return location.pathname.substring(1);
    }
}
