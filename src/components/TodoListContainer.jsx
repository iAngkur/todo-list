import { Box } from "@mui/material";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { useEffect, useState } from "react";

export const TodoListContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      const localStorageTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      if (localStorageTasks) {
        setTasks(localStorageTasks);
      }
    }
  }, [firstLoad, setFirstLoad]);

  // update the localStorage
  // on first load - we need to pull from the localStorage and render

  const updateStorage = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const addTask = (description) => {
    const updatedTasks = [
      ...tasks,
      { id: Date.now(), description, done: false, deleted: false },
    ];
    updateStorage(updatedTasks);
  };

  const updateTask = (id, description) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.description = description;
      }
      return task;
    });
    updateStorage(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });

    updateStorage(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.deleted = true;
      }
      return task;
    });

    updateStorage(updatedTasks);
  };

  return (
    <Box>
      <AddTodo addTask={addTask} />
      <TodoList
        tasks={tasks}
        updatedTask={updateTask}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </Box>
  );
};
