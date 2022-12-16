import "./App.css";
import { useAppSelector } from "./app/hooks";
import { useGetPhotosQuery } from "./api";

function App() {
    const value = useAppSelector((state) => state.photoList.value);

    const { data, error, isLoading } = useGetPhotosQuery();

    console.log(data);
    return (
        <div className="bg-primary h-32">
            {value}
            <div className="bg-primary-light">abc</div>
        </div>
    );
}

export default App;
