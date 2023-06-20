import { PayloadAction } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
import { Character } from '../model/interfases';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

type FormState = {
  formCards: Character[];
};
const initialState: FormState = {
  formCards: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCardForm: (state, action: PayloadAction<Character>) => {
      state.formCards.push(action.payload);
    },
  },
});

export const { addCardForm } = formSlice.actions;
export default formSlice.reducer;
