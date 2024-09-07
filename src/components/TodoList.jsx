import { useState } from "react";
import { TodoListItem } from "./TodoListItem";
import { Box, Button, List, Paper, Stack } from "@mui/material";

export const TodoList = ({ tasks, updatedTask, toggleTask, deleteTask }) => {
  const [filter, setFilter] = useState("active");
  const handleShowAllTasks = () => {
    setFilter("all");
  };
  const handleShowActiveTasks = () => {
    setFilter("active");
  };
  const handleShowDeletedTasks = () => {
    setFilter("deleted");
  };
  const handleShowCompletedTasks = () => {
    setFilter("completed");
  };

  const getFilteredTasks = () => {
    return tasks.filter((task) => {
      return (
        (filter == "active" && !task.deleted) ||
        (filter == "deleted" && task.deleted) ||
        (filter == "completed" && task.done) ||
        filter == "all"
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
            onClick={handleShowAllTasks}
            variant={filter === "all" ? "outlined" : "text"}
          >
            All
          </Button>
          <Button
            onClick={handleShowActiveTasks}
            variant={filter === "active" ? "outlined" : "text"}
          >
            Active
          </Button>
          <Button
            onClick={handleShowDeletedTasks}
            variant={filter === "deleted" ? "outlined" : "text"}
          >
            Deleted
          </Button>
          <Button
            onClick={handleShowCompletedTasks}
            variant={filter === "completed" ? "outlined" : "text"}
          >
            Completed
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};
