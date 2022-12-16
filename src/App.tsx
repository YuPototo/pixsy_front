import "./App.css";
import { useAppSelector } from "./app/hooks";

function App() {
    const value = useAppSelector((state) => state.photoList.value);
    return (
        <div className="bg-primary h-32">
            {value}
            <div className="bg-primary-light">abc</div>
        </div>
    );
}

export default App;
