import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { URL, PAGE, SEARCH_PARAM } from '../helpers/constants';
import { ApiResponce, Character } from '../model/interfases';
import { RootState } from '.';

type CardInitialState = {
  cardsList: Required<Character>[];
  pages: number;
  currentPage: number;
  count: number;
  cardsPerRage: number;
  loading: boolean;
  error: string | null;
};

const initialState: CardInitialState = {
  cardsList: [],
  pages: 1,
  currentPage: 1,
  count: 0,
  cardsPerRage: 20,
  loading: false,
  error: null,
};

export const fetchCards = createAsyncThunk<
  ApiResponce,
  undefined,
  { rejectValue: string; state: RootState }
>('cards/fetchCards', async function (_, { rejectWithValue, getState }) {
  const cardsPerRage = getState().cards.cardsPerRage;
  const currentPage = getState().cards.currentPage;
  const searchQuery = getState().search.searchQuery;

  let pageQuery;
  if (cardsPerRage === 20) pageQuery = Number(currentPage);
  if (cardsPerRage === 10 && Number(currentPage) % 2 === 0) pageQuery = Number(currentPage) / 2;
  if (cardsPerRage === 10 && Number(currentPage) % 2 !== 0)
    pageQuery = (Number(currentPage) + 1) / 2;

  const res = await fetch(`${URL}?${PAGE}${pageQuery}&${SEARCH_PARAM}${searchQuery}`);
  if (!res.ok) {
    return rejectWithValue('Server Error!');
  }
  const data = await res.json();
  return data;
});

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.pages = action.payload;
    },
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    changeCardsPerRage(state, action: PayloadAction<number>) {
      state.cardsPerRage = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        if (action.payload.info) {
          state.pages = action.payload.info.pages;
          state.count = action.payload.info.count;
        }
        if (action.payload.error) {
          state.cardsList = [];
        }
        if (action.payload.results) {
          const result =
            state.cardsPerRage === 20
              ? [...action.payload.results]
              : Number(state.pages) % 2 === 0
              ? action.payload.results.slice(10)
              : action.payload.results.slice(0, 10);
          state.cardsList = result;
        }
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload!;
        state.cardsList = [];
      });
  },
});

export const { setPage, setCount, changeCardsPerRage, setCurrentPage } = cardsSlice.actions;
export default cardsSlice.reducer;
