import Checkbox from "@mui/material/Checkbox";

import {
  Box,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const TodoListItem = ({
  id,
  description,
  checked,
  updatedTask,
  deleteTask,
  toggleTask,
}) => {
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleCheckBox = (event) => {
    toggleTask(id);
  };

  const handleOnClick = (event) => {
    setEditing(true);
  };

  const handleOnChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setEditing(false);
      updatedTask(id, newDescription);
    }
  };

  const handleOnBlur = (event) => {
    setEditing(false);
  };

  const handleOnCancel = (event) => {
    let confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      deleteTask(id);
    }
    setEditing(false);
  };

  return (
    <Box>
      <ListItem
        sx={{
          borderBottom: "1px solid 	#C8C8C8",
          padding: 1,
        }}
      >
        <Checkbox
          checked={checked}
          onClick={handleCheckBox}
          inputProps={{ "aria-label": "controlled" }}
        />
        {editing ? (
          <TextField
            value={newDescription}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyDown}
            fullWidth={true}
            variant="standard"
            autoFocus={true}
          />
        ) : (
          <ListItemText onClick={handleOnClick}>{newDescription} </ListItemText>
        )}
        <IconButton onClick={handleOnCancel}>
          <CloseIcon />
        </IconButton>
      </ListItem>
    </Box>
  );
};
