import { useEffect, useState } from "react";
import {
    filterAllCocktails,
    getFilteredCocktailsFromTheApi,
    setSearchKey,
} from "../redux/features/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Search = ({ className }) => {
    // const [searchText, setSearchText] = useState("");

    const dispatch = useDispatch();
    const searchKey = useSelector((state) => state.cocktailSlice.searchKey);

    useEffect(() => {
        dispatch(getFilteredCocktailsFromTheApi(searchKey));
    }, [searchKey]);

    const handleSearchTextChange = (e) => {
        dispatch(setSearchKey(e.target.value));
    };

    return (
        <form className={`${className} p-3 mt-2 flex justify-center`}>
            <label className="flex flex-col p-3 border-2 rounded bg-gray-200">
                <p className="text-2xl font-bold text-gray-800 text-center m-2 ">
                    Search Cocktail
                </p>
                <input
                    type="text"
                    value={searchKey}
                    onChange={handleSearchTextChange}
                    placeholder="Search"
                    className="focus:outline-none border border-gray-600 p-2 text-xl font-semibold rounded"
                />
            </label>
        </form>
    );
};

export default Search;
