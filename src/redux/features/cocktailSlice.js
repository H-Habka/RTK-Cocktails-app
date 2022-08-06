import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: false,
    filteredCocktails: [],
    searchKey: "",
};

export const fetchCocktails = createAsyncThunk(
    "cocktails/fetchCocktails",
    async () => {
        return await axios.get(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
        );
    }
);

const filterCocktails = (cocktails, key) => {
    return cocktails.filter((item) => {
        if (
            item.name.search(key) != -1 ||
            item.info.search(key) != -1 ||
            item.glass.search(key) != -1 ||
            item.category.search(key) != -1 ||
            item.instruction.search(key) != -1
        )
            return 1;
    });
};

const getModifiedCocktails = (cocktails) => {
    if (cocktails && cocktails.length !== 0)
        return cocktails.map((item) => ({
            id: item.idDrink,
            name: item.strDrink,
            image: item.strDrinkThumb,
            info: item.strAlcoholic,
            glass: item.strGlass,
            category: item.strCategory,
            instruction: item.strInstructions,
            ingredients: [
                item.strIngredient1,
                item.strIngredient2,
                item.strIngredient3,
                item.strIngredient4,
                item.strIngredient5,
            ],
        }));
    return [];
};

export const getFilteredCocktailsFromTheApi = createAsyncThunk(
    "cocktails/fetchFilteredCocktails",
    async (key) => {
        
        return axios
            .get(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${key}`
            )
            .catch(function (thrown) {
                if (axios.isCancel(thrown)) {
                    console.log("Request canceled", thrown.message);
                }
            });
    }
);

const cocktailSlice = createSlice({
    name: "cocktails",
    initialState,
    reducers: {
        getSingleCocktail: (state, action) => {
            state.cocktail = state.cocktails.filter(
                (item) => item.id === action.payload
            );
        },
        filterAllCocktails: (state, action) => {
            state.filteredCocktails = filterCocktails(
                state.cocktails,
                action.payload
            );
        },
        setSearchKey: (state, action) => {
            state.searchKey = action.payload;
        },
    },
    extraReducers: {
        [fetchCocktails.pending]: (state) => {
            state.loading = true;
        },
        [fetchCocktails.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktails = getModifiedCocktails(action.payload.data.drinks);
        },
        [fetchCocktails.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [getFilteredCocktailsFromTheApi.pending]: (state) => {
            state.loading = true;
        },
        [getFilteredCocktailsFromTheApi.fulfilled]: (state, action) => {
            state.loading = false;
            state.filteredCocktails = getModifiedCocktails(
                action.payload.data.drinks
            );
        },
        [getFilteredCocktailsFromTheApi.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { getSingleCocktail, filterAllCocktails, setSearchKey } =
    cocktailSlice.actions;

export default cocktailSlice.reducer;
