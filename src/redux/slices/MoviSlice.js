import { createSlice } from '@reduxjs/toolkit';

const MoviSlice = createSlice({
  name: 'Movi',
  initialState: {
    Fav: [],
  },
  reducers: {
    addtoFav: (state, action) => {
      let index = state.Fav.findIndex((item) => action.payload.id === item.id);
      if (index > -1) {
        alert("already exist");
      } else {
        state.Fav.push(action.payload);
        console.log(action.payload)
      }
    },
  },
});

export const { addtoFav } = MoviSlice.actions;
export default MoviSlice.reducer;
