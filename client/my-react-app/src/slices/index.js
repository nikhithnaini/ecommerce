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
    return response.data;
  }
);

// const formSlice = createSlice({
//   name: "form",
//   initialState: {
//     isAuthenticated: false,
//     data: {},
//     loading: false,
//     success: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(submitForm.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(submitForm.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.data = action.payload;
//       })
//       .addCase(submitForm.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });
////////////////////// Login ////////////////

export const loginForm = createAsyncThunk(
  "login/loginForm",
  async (loginData) => {
    const response = await axios.post(
      "http://localhost:3000/api/login",
      loginData,
      {
        withCredentials: true,
      }
    );
    return response.data;
  }
);
export const checkauth = createAsyncThunk("auth/checkAuth", async () => {
  const response = await axios.post("http://localhost:3000/api/check-auth", {
    withCredentials: true,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });

  return response.data;
});
const authslice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    data: {},
    loading: false,
    success: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginForm.pending, (state) => {
        (state.isAuthenticated = false), (state.loading = true);
        state.error = null;
      })
      .addCase(loginForm.fulfilled, (state, action) => {
        (state.isAuthenticated = true), (state.loading = false);
        state.success = true;
        state.data = action.payload;
      })
      .addCase(loginForm.rejected, (state, action) => {
        (state.isAuthenticated = false), (state.loading = false);
        state.error = action.error.message;
      })
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
export default authslice.reducer;
