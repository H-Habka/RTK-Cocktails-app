import {configureStore, combineReducers} from '@reduxjs/toolkit'
import cocktailSlice from './features/cocktailSlice'

const rootReducer = combineReducers({
    cocktailSlice : cocktailSlice
})


export const store = configureStore({
    reducer: rootReducer
})