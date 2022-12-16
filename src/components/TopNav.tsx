import SearchForm from "./SearchForm";

export default function TopNav() {
    return (
        <div className="w-full h-16 bg-primary-light flex relative items-center">
            <SearchForm />
            <div className="absolute right-5">
                <button className="bg-primary text-white px-4 py-2 font-bold tracking-wider">
                    IMPORT
                </button>
            </div>
        </div>
    );
}
