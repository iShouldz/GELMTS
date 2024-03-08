import { createSlice } from "@reduxjs/toolkit";

const initialUsersState = {
  user: [], isLogado: false, isAdmin: false
};

const userSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    handleUpdateLogin(state) {
      state.isLogado = !state.isLogado
    },
    handleCurrentLogin(state, actions){
        state.user = actions.payload
    }
  },
});

export default userSlice;
export const userActions = userSlice.actions;