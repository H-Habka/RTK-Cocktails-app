import "./App.css";
import { HomePage, SingleItemPage } from "./pages";
import {Header} from "./components"
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/cocktail/:id" element={<SingleItemPage />}/>
            </Routes>
        </div>
    );
}

export default App;
