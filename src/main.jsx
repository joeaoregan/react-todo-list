import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { todosSlice } from "./todosSlice.js"; // Import the todos slice
import "./index.css";
import App from "./App.jsx";

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer, // Use the todos slice reducer
  },
}); // Placeholder for Redux store configuration

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
