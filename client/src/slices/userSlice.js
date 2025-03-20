// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Define initial state
// const initialState = {
//   user: null,
//   token: null,
//   loading: false,
//   role: null,
//   username: null,
//   error: null,
// };

// // Async thunk for user login
// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "https://traincape-backend-1.onrender.com/users/login",
//         { email, password }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || { msg: "Login failed" });
//     }
//   }
// );

// // Async thunk for user signup
// export const signupUser = createAsyncThunk(
//   "user/signupUser",
//   async ({ email, password, username }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "https://traincape-backend-1.onrender.com/users/register",
//         { email, password, username }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || { msg: "Signup failed" });
//     }
//   }
// );

// // Create the slice
// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     logoutUser: (state) => {
//       // Clear state and local storage
//       state.user = null;
//       state.token = null;
//       state.role = null;
//       state.username = null;
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       localStorage.removeItem('username');
//       localStorage.removeItem('role');
//     },
//     setUserFromLocalStorage: (state) => {
//       // Initialize state from local storage
//       state.token = localStorage.getItem('token');
//       state.username = localStorage.getItem('username');
//       state.role = localStorage.getItem('role');
//       state.user = JSON.parse(localStorage.getItem('user')); // Parse the user object
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       // Handle login
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         const { token, user } = action.payload;

//         // Store values in local storage
//         localStorage.setItem("token", token);
//         localStorage.setItem("username", user.username);
//         localStorage.setItem("role", user.role);
//         localStorage.setItem("user", JSON.stringify(user)); // Store user object as JSON

//         // Update state
//         state.loading = false;
//         state.token = token;
//         state.username = user.username;
//         state.role = user.role;
//         state.user = user;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.msg || "Login failed";
//       })
//       // Handle signup
//       .addCase(signupUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signupUser.fulfilled, (state, action) => {
//         const { token, user } = action.payload;

//     // Store user object as JSON

//         // Update state
//         state.loading = false;
//       })
//       .addCase(signupUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.msg || "Signup failed";
//       });
//   },
// });

// export const { logoutUser, setUserFromLocalStorage } = userSlice.actions;

// export default userSlice.reducer;

//Updated code by Ritik
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Define initial state
// const initialState = {
//   user: null,
//   token: null,
//   loading: false,
//   role: null,
//   username: null,
//   error: null,
// };

// // Async thunk for user login
// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "https://traincape-backend-1.onrender.com/users/login",
//         { email, password }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || { msg: "Login failed" });
//     }
//   }
// );

// // Async thunk for user signup
// export const signupUser = createAsyncThunk(
//   "user/signupUser",
//   async ({ email, password, username }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "https://traincape-backend-1.onrender.com/users/register",
//         { email, password, username }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || { msg: "Signup failed" });
//     }
//   }
// );

// // Create the slice
// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     logoutUser: (state) => {
//       // Clear state and local storage
//       state.user = null;
//       state.token = null;
//       state.role = null;
//       state.username = null;
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       localStorage.removeItem("username");
//       localStorage.removeItem("role");
//     },
//     setUserFromLocalStorage: (state) => {
//       // Initialize state from local storage
//       const token = localStorage.getItem("token");
//       const username = localStorage.getItem("username");
//       const role = localStorage.getItem("role");
//       const user = JSON.parse(localStorage.getItem("user"));
      
//       if (token && user) {
//         // If token and user data are present in localStorage, set the state
//         state.token = token;
//         state.username = username;
//         state.role = role;
//         state.user = user;
//       }
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       // Handle login
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         const { token, user } = action.payload;

//         // Store values in local storage
//         localStorage.setItem("token", token);
//         localStorage.setItem("username", user.username);
//         localStorage.setItem("role", user.role);
//         localStorage.setItem("user", JSON.stringify(user)); // Store user object as JSON

//         // Update state
//         state.loading = false;
//         state.token = token;
//         state.username = user.username;
//         state.role = user.role;
//         state.user = user;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.msg || "Login failed";
//       })
//       // Handle signup
//       .addCase(signupUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signupUser.fulfilled, (state, action) => {
//         const { token, user } = action.payload;

//         // Store values in local storage (in case you want to auto-login after signup)
//         localStorage.setItem("token", token);
//         localStorage.setItem("username", user.username);
//         localStorage.setItem("role", user.role);
//         localStorage.setItem("user", JSON.stringify(user));

//         // Update state
//         state.loading = false;
//         state.token = token;
//         state.username = user.username;
//         state.role = user.role;
//         state.user = user;
//       })
//       .addCase(signupUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.msg || "Signup failed";
//       });
//   },
// });

// export const { logoutUser, setUserFromLocalStorage } = userSlice.actions;

// export default userSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Define initial state
// const initialState = {
//   user: null,
//   token: null,
//   loading: false,
//   role: null,
//   username: null,
//   error: null,
// };

// // Async thunk for user login
// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "https://traincape-backend-1.onrender.com/users/login",
//         { email, password }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || { msg: "Login failed" });
//     }
//   }
// );

// // Async thunk for user signup
// export const signupUser = createAsyncThunk(
//   "user/signupUser",
//   async (
//     {
//       email,
//       password,
//       username,
//       phoneNumber,
//       address,
//       pinCode,
//       country,
//       linkedIn,
//       interest,
//     },
//     { rejectWithValue }
//   ) => {
//     try {
//       const response = await axios.post(
//         "https://traincape-backend-1.onrender.com/users/register",
//         {
//           email,
//           password,
//           username,
//           phoneNumber,
//           address,
//           pinCode,
//           country,
//           linkedIn,
//           interest,
//         }
//       );
//       // console.log("API Response:", response.data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || { msg: "Signup failed" });
//     }
//   }
// );

// // Create the slice
// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     logoutUser: (state) => {
//       // Clear state and local storage
//       state.user = null;
//       state.token = null;
//       state.role = null;
//       state.username = null;
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       localStorage.removeItem("username");
//       localStorage.removeItem("role");
//     },
//     setUserFromLocalStorage: (state) => {
//       // Initialize state from local storage
//       const token = localStorage.getItem("token");
//       const username = localStorage.getItem("username");
//       const role = localStorage.getItem("role");
//       const user = JSON.parse(localStorage.getItem("user"));

//       if (token && user) {
//         // If token and user data are present in localStorage, set the state
//         state.token = token;
//         state.username = username;
//         state.role = role;
//         state.user = user;
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Handle login
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         const { token, user } = action.payload; // user is directly returned here

//         // Store values in local storage
//         localStorage.setItem("token", token);
//         localStorage.setItem("username", user.username); // access user.username
//         localStorage.setItem("role", user.role);
//         localStorage.setItem("user", JSON.stringify(user)); // Store user object

//         // Update state
//         state.loading = false;
//         state.token = token;
//         state.username = user.username;
//         state.role = user.role;
//         state.user = user;
//       })

//       // Handle signup
//       .addCase(signupUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })

//       // .addCase(signupUser.fulfilled, (state, action) => {
//       //   const { token, user } = action.payload;

//       //   // Store values in local storage (in case you want to auto-login after signup)
//       //   localStorage.setItem("token", token);
//       //   localStorage.setItem("username", user.username);
//       //   localStorage.setItem("role", user.role);
//       //   localStorage.setItem("user", JSON.stringify(user));

//       //   // Update state
//       //   state.loading = false;
//       //   state.token = token;
//       //   state.username = user.username;
//       //   state.role = user.role;
//       //   state.user = user;
//       // })
//       .addCase(signupUser.fulfilled, (state, action) => {
//         const { token, registeredUser } = action.payload; // registeredUser is returned in signup response
      
//         // Store values in local storage
//         localStorage.setItem("token", token);
//         localStorage.setItem("username", registeredUser.username); // access registeredUser.username
//         localStorage.setItem("role", registeredUser.role);
//         localStorage.setItem("user", JSON.stringify(registeredUser)); // Store registeredUser object
      
//         // Update state
//         state.loading = false;
//         state.token = token;
//         state.username = registeredUser.username;
//         state.role = registeredUser.role;
//         state.user = registeredUser;
//       })
//       .addCase(signupUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.msg || "Signup failed";
//       });
//   },
// });

// export const { logoutUser, setUserFromLocalStorage } = userSlice.actions;

// export default userSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FaCreativeCommonsPd } from "react-icons/fa6";

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
        `http://localhost:8080/users/sendOTPToEmail`,
        { email }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { msg: "OTP Failed to be Sent" });
    }
  }
);

// Async thunk for user send otp
export const verifyOtp = createAsyncThunk(
  "user/verifyOtp",
  async ({ otp,email }, { rejectWithValue }) => {
    try {
      console.log("Otp being sent to slice is",otp)
      const response = await axios.post(
        `http://localhost:8080/users/verifyOtp`,
        { otp,email }
      );
      console.log("THE RESPOSE IS---->",response)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { msg: "OTP Failed to be Verified" });
    }
  }
);

export const reset_password = createAsyncThunk(
  "user/reset_password",
  async ({ otp,email, newPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/users/reset_password`,
        { otp,email,newPassword }
      );
      console.log("THE RESPOSE IS---->",response)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { msg: "New Passsword Failed to be Changed" });
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
      // console.log("API Response:", response.data);
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
        const { token, user } = action.payload; // user is directly returned here

        // Store values in local storage
        localStorage.setItem("token", token);
        localStorage.setItem("username", user.username); // access user.username
        localStorage.setItem("role", user.role);
        localStorage.setItem("user", JSON.stringify(user)); // Store user object

        // Update state
        state.loading = false;
        state.token = token;
        state.username = user.username;
        state.role = user.role;
        state.user = user;
      })

      // Handle signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // .addCase(signupUser.fulfilled, (state, action) => {
      //   const { token, user } = action.payload;

      //   // Store values in local storage (in case you want to auto-login after signup)
      //   localStorage.setItem("token", token);
      //   localStorage.setItem("username", user.username);
      //   localStorage.setItem("role", user.role);
      //   localStorage.setItem("user", JSON.stringify(user));

      //   // Update state
      //   state.loading = false;
      //   state.token = token;
      //   state.username = user.username;
      //   state.role = user.role;
      //   state.user = user;
      // })
      .addCase(signupUser.fulfilled, (state, action) => {
        const { token, registeredUser } = action.payload; // registeredUser is returned in signup response
      
        // Store values in local storage
        localStorage.setItem("token", token);
        localStorage.setItem("username", registeredUser.username); // access registeredUser.username
        localStorage.setItem("role", registeredUser.role);
        localStorage.setItem("user", JSON.stringify(registeredUser)); // Store registeredUser object
      
        // Update state
        state.loading = false;
        state.token = token;
        state.username = registeredUser.username;
        state.role = registeredUser.role;
        state.user = registeredUser;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.msg || "Signup failed";
      });
  },
});

export const { logoutUser, setUserFromLocalStorage } = userSlice.actions;

export default userSlice.reducer;