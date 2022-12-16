export interface IPhoto {
    id: string;
    description: string | null;
    url: string;
    link: string;
    topics: string[];
    user: string;
}

export type ISideBarItem =
    | "matches"
    | "images"
    | "cases"
    | "takedowns"
    | "register";
