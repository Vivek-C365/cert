import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  bio: '',
  phone: '',
  // Add other fields as needed
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserSettings: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUserSettings } = userSlice.actions;
export default userSlice.reducer;
