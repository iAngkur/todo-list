import { TextInput } from "@iangkur/input-text";
import { useState } from "react";

export const AddTodo = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTask(value);
    setValue("");
  };

  return (
    <TextInput
      value={value}
      placeholder="Enter a new task"
      onChange={handleOnChange}
      onSubmit={handleOnSubmit}
    />
  );
};
