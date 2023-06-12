import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Counter from "./components/Counter";

const newInitialState = {
  isLogged: false,
};
const initialState = {
  value: 0,
  isVisible: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState: newInitialState,
  reducers: {
    auth: (state) => {
      state.isLogged = true;
    },
  },
});

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    toggleVisible: (state) => {
      state.isVisible = !state.isVisible;
    },
    incMore: (state, { payload }) => {
      state.value = state.value + payload;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

function App() {
  return (
    <Provider store={store}>
      <h1>Hello</h1>
      <Counter />
    </Provider>
  );
}

export default App;
