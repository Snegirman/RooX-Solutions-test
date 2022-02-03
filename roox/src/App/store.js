import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./Reducers/cards";

export default configureStore({
    reducer: {
        cards: cardsReducer
    }
});