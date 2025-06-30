import { useState } from "react";

export default function NewTodoForm({ onCreateClicked }) {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          onCreateClicked(inputText);
          setInputText(""); // Clear the input field after creating a todo
        }}
      >
        Create Todo
      </button>
    </div>
  );
}
