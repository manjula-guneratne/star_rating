import React from "react";
import { useInput } from "./hooks";

function AddColourForm({ onNewColour = (f) => f }) {
  const [titleProps, resetTitle] = useInput("");
  const [colourProps, resetColour] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    onNewColour(titleProps.value, colourProps.value);
    resetTitle();
    resetColour();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="colour title..."
        required
      />
      <input {...colourProps} type="colour" required />
      <button>ADD</button>
    </form>
  );
}
