import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { homeService } from "../services/homeService";

export const fetchHome = createAsyncThunk("home/fetchHome", async () => {
  return await homeService.getHomeData();
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    categories: [],
    recommend: [],
    newBooks: [],
    ranks: [],
    authors: [],
    special: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHome.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHome.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchHome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default homeSlice.reducer;
