import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define initial state
const initialState = {
  user: null,
  token: null,
  loading: false,
  role: null,
  username: null,
  error: null,
};

// Async thunk for user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://traincape-backend-1.onrender.com/users/login",
        { email, password }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { msg: "Login failed" });
    }
  }
);

// Async thunk for user send otp
export const sendOTPToEmail = createAsyncThunk(
  "user/sendOTPToEmail",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://traincape-backend-1.onrender.com/users/sendOTPToEmail",
        { email }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { msg: "OTP Failed to be Sent" });
    }
  }
);

// Async thunk for user verify otp
export const verifyOtp = createAsyncThunk(
  "user/verifyOtp",
  async ({ otp, email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://traincape-backend-1.onrender.com/users/verifyOtp",
        { otp, email }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { msg: "OTP Failed to be Verified" });
    }
  }
);

// Async thunk for password reset
export const reset_password = createAsyncThunk(
  "user/reset_password",
  async ({ otp, email, newPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://traincape-backend-1.onrender.com/users/reset_password",
        { otp, email, newPassword }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { msg: "New Password Failed to be Changed" });
    }
  }
);

// Async thunk for user signup
export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (
    {
      email,
      password,
      username,
      phoneNumber,
      address,
      pinCode,
      country,
      linkedIn,
      interest,
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        "https://traincape-backend-1.onrender.com/users/register",
        {
          email,
          password,
          username,
          phoneNumber,
          address,
          pinCode,
          country,
          linkedIn,
          interest,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { msg: "Signup failed" });
    }
  }
);

// Create the slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      // Clear state and local storage
      state.user = null;
      state.token = null;
      state.role = null;
      state.username = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
    },
    setUserFromLocalStorage: (state) => {
      // Initialize state from local storage
      const token = localStorage.getItem("token");
      const username = localStorage.getItem("username");
      const role = localStorage.getItem("role");
      const user = JSON.parse(localStorage.getItem("user"));

      if (token && user) {
        // If token and user data are present in localStorage, set the state
        state.token = token;
        state.username = username;
        state.role = role;
        state.user = user;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { token, user } = action.payload;

        // Store values in local storage
        localStorage.setItem("token", token);
        localStorage.setItem("username", user.username);
        localStorage.setItem("role", user.role);
        localStorage.setItem("user", JSON.stringify(user));

        // Update state
        state.loading = false;
        state.token = token;
        state.username = user.username;
        state.role = user.role;
        state.user = user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.msg || "Login failed";
      })

      // Handle signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        // Only reset loading state after signup, user will need to login
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.msg || "Signup failed";
      })

      // Handle OTP sending
      .addCase(sendOTPToEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOTPToEmail.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendOTPToEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.msg || "Failed to send OTP";
      })

      // Handle OTP verification
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.msg || "OTP verification failed";
      })

      // Handle password reset
      .addCase(reset_password.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(reset_password.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(reset_password.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.msg || "Password reset failed";
      });
  },
});

export const { logoutUser, setUserFromLocalStorage } = userSlice.actions;

export default userSlice.reducer;