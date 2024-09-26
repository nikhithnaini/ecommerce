import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk for submitting form data
//register
export const submitForm = createAsyncThunk(
  "form/submitForm",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:3000/api/register",
      formData,
      {
        withCredentials: true,
      }
    );
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: {
    data: {},
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default formSlice.reducer;
