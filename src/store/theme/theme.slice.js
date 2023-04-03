export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.value.activeTheme = action.payload;
    },
  },
});
