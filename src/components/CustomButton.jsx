import { Link } from "react-router-dom";

const CustomButton = ({ to , text}) => {
    return (
        <div className="mt-3">
            <Link
                className="font-semibold px-4 py-2 rounded bg-blue-800 text-white hover:bg-blue-500 hover:text-gray-800"
                to={to}
            >
                {text}
            </Link>
        </div>
    );
};

export default CustomButton;
