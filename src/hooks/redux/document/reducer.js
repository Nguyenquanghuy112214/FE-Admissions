import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Cổng thông tin tuyển sinh',
};

const document = createSlice({
  name: 'document',
  initialState: initialState,
  reducers: {
    changeDocument: (state, action) => {
      state.title = action.payload;
    },
  },
});

const { reducer, actions } = document;
export const { changeDocument } = actions;
export default reducer;
