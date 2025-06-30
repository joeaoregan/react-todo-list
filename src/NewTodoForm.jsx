import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "./todosSlice.js"; // Import the action creator

export default function NewTodoForm() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(createTodo(inputText)); // Dispatch the action to create a new todo
          setInputText(""); // Clear the input field after creating a todo
        }}
      >
        Create Todo
      </button>
    </div>
  );
}
