import CocktailItem from "./CocktailItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCocktails } from "../redux/features/cocktailSlice";
import Spinner from "./Spinner";


const CocktailList = () => {
    const { cocktails, cocktal, loading, error } = useSelector((state) => ({
        ...state.cocktailSlice,
    }));

    const filteredCocktails = useSelector(
        (state) => state.cocktailSlice.filteredCocktails
    );

    const searchKey = useSelector(state => state.cocktailSlice.searchKey)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCocktails());
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : filteredCocktails.length >= 1 || searchKey !=0 ? (
                <ul className="p-6 grid grid-cols-auto15rem gap-4">
                    {filteredCocktails.map((item) => (
                        <CocktailItem key={item.id} item={item} className="bg-gray-500" />
                    ))}
                </ul>
            ) : (
                <ul className="p-6 grid grid-cols-auto15rem gap-4">
                    {cocktails.map((item) => (
                        <CocktailItem key={item.id} item={item} className="bg-gray-500" />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CocktailList;
