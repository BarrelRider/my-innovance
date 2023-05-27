import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../../constants/types/UserState';



const initialState: UserState = {
  id: null,
  name: null,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserSuccess(state, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setUserFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearUser(state) {
      state.id = null;
      state.name = null;
      state.email = null;
    }
  },
});

export const {
  setUserSuccess,
  setUserFailure,
  clearUser,
} = userSlice.actions;

export default userSlice.reducer;
