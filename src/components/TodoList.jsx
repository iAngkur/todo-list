import { useState } from "react";
import { TodoListItem } from "./TodoListItem";
import { Box, Button, List, Paper, Stack } from "@mui/material";

export const TodoList = ({ tasks, updatedTask, toggleTask, deleteTask }) => {
  const [filter, setFilter] = useState("active");

  const onButtonClick = (filterType) => () => {
    setFilter(filterType);
  };

  const getFilteredTasks = () => {
    return tasks.filter((task) => {
      return (
        !task.deleted &&
        ((filter == "active" && !task.done) ||
          (filter == "completed" && task.done) ||
          filter == "all")
      );
    });
  };

  return (
    <Paper square={true} sx={{ marginTop: 2 }}>
      {tasks.length > 0 && (
        <List>
          {getFilteredTasks().map(({ id, description, deleted, done }) => (
            <TodoListItem
              key={id}
              id={id}
              description={description}
              checked={done}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              updatedTask={updatedTask}
            />
          ))}
        </List>
      )}
      <Box sx={{ padding: 1 }}>
        <Stack direction="row" justifyContent="center">
          <Button
            onClick={onButtonClick("all")}
            variant={filter === "all" ? "outlined" : "text"}
          >
            All
          </Button>
          <Button
            onClick={onButtonClick("active")}
            variant={filter === "active" ? "outlined" : "text"}
          >
            Active
          </Button>
          <Button
            onClick={onButtonClick("completed")}
            variant={filter === "completed" ? "outlined" : "text"}
          >
            Completed
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};
