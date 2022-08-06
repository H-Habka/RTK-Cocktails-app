import CustomButton from "./CustomButton";

const CocktailItem = ({ className, item }) => {
    if (!item) return;
    const { id, name, image, info, glass } = item;
    return (
        <li className={`${className} p-3 rounded pb-5`}>
            <div className="rounded overflow-hidden mb-2">
                <img src={image} alt={name} />
            </div>
            <div className="">
                <h2 className="font-bold text-2xl">{name}</h2>
                <h3 className="font-semibold text-xl">{glass}</h3>
                <h4 className="text-sm  text-gray-700">{info}</h4>
            </div>
            <CustomButton text='Details' to={`/cocktail/${id}`}/>
        </li>
    );
};

export default CocktailItem;
