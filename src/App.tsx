import React from "react";
import "./App.css";
import { useAppSelector } from "./app/hooks";

function App() {
    const value = useAppSelector((state) => state.photoList.value);
    return <div className="bg-red-100 h-32">{value}</div>;
}

export default App;
