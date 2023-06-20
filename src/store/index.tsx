// import { configureStore } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
import searchReduser from './searchSlice';
import cardsReduser from './cardsSlice';
import formReducer from './formSlice';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { configureStore } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

const store = configureStore({
  reducer: {
    cards: cardsReduser,
    search: searchReduser,
    form: formReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
