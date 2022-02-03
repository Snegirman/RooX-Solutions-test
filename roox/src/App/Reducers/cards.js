import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const getCards = createAsyncThunk(
    'cards/getCards',
    async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json());
        res = Array.from(res);
        return res;
    }
)

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        entities: [],
        loading: true
    },
    reducers: {
        filterByCity: state => {
            state.entities.sort((a, b) => {
               if (a.address.city > b.address.city) return 1;
               return -1;
            })
        },
        filterByCompany: state => {
            state.entities.sort((a, b) => {
                if (a.company.name > b.company.name) return 1;
                return -1;
             })
        }
    },
    extraReducers: {
        [getCards.pending]: state => {
            state.loading = true;
        },
        [getCards.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.entities = payload;
        },
        [getCards.rejected]: state => {
            state.loading = false;
        }
    }
})

export default cardsSlice.reducer;
export {getCards};
export const { filterByCity, filterByCompany } = cardsSlice.actions;