import { useSelector, useDispatch } from "react-redux";
import { getSingleCocktail } from "../redux/features/cocktailSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Spinner } from "../components";
import CustomButton from "../components/CustomButton";

const SingleItemPage = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const cocktail = useSelector((state) => state.cocktailSlice.cocktail);

    useEffect(() => {
        dispatch(getSingleCocktail(id));
        console.log(cocktail);
    }, [id]);

    if (!cocktail || cocktail.length === 0) return <Spinner />;

    const {name, image, info, glass, category, instruction, ingredients } =
        cocktail[0];

    return (
        <div className="flex flex-col bg-gray-100 items-center gap-4 justify-center p-4">
            <div className="flex flex-col gap-6 items-center">
                <CustomButton to="/" text="Go Back" />
                <div className="text-4xl font-bold text-gray-900 text-center">{name}</div>
            </div>
            <div className="flex p-3 sm:p-6 gap-6 bg-gray-300 flex-col md:flex-row rounded mb-3 items-center md:items-start">
                <div className="sm:w-96 w-64 aspect-square rounded overflow-hidden md:mt-4">
                    <img src={image} alt={name} />
                </div>
                <div className="flex flex-col gap-4 p-4 sm:p-8 max-w-[40ch] lg:max-w-[60ch]">
                    <p>
                        <span className="text-lg md:text-xl lg:text-2xl font-semibold text-grap-900 ">Name: </span>
                        <span className="lg:text-lg text-gray-700 font-semibold">{name}</span>
                    </p>
                    <p>
                        <span className="text-lg md:text-xl lg:text-2xl font-semibold text-grap-900 ">Category: </span>
                        <span className="lg:text-lg text-gray-700 font-semibold">{category}</span>
                    </p>
                    <p>
                        <span className="text-lg md:text-xl lg:text-2xl font-semibold text-grap-900 ">Info: </span>
                        <span className="lg:text-lg text-gray-700 font-semibold">{info}</span>
                    </p>
                    <p>
                        <span className="text-lg md:text-xl lg:text-2xl font-semibold text-grap-900 ">Glass: </span>
                        <span className="lg:text-lg text-gray-700 font-semibold">{glass}</span>
                    </p>
                    <p>
                        <span className="text-lg md:text-xl lg:text-2xl font-semibold text-grap-900 ">Instractions: </span>
                        <span className="text-justify text-lg text-gray-700 font-semibold">{instruction}</span>
                    </p>
                    <div>
                        <span className="text-lg md:text-xl lg:text-2xl font-semibold text-grap-900 ">Ingredients: </span>
                        <div className="inline-block text-lg text-gray-800 font-semibold">
                        {
                           ingredients?.filter(item => item).map(item => <span >{item}{", "}</span>) 
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItemPage;
