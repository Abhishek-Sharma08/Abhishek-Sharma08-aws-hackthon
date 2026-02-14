import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { xp: 0, currentLesson: 1 },
  reducers: {
    updateXP: (state, action) => {
      state.xp += action.payload;
    },
    setLesson: (state, action) => {
      state.currentLesson = action.payload;
    }
  }
});

export const { updateXP, setLesson } = userSlice.actions;
export default userSlice.reducer;