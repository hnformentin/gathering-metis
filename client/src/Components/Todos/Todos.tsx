import { Grid, Snackbar } from "@material-ui/core";
import React, { useState, useEffect, useCallback } from "react";
import useFetch from "use-http";
import { TodoList } from "../../_types/models";
import { FullPageSpinner } from "../FullPageSpinner";
import { Alert } from "@material-ui/lab";

export const Todos = () => {
  const { get, response, loading } = useFetch({}, []);
  const [todoList, setTodoList] = useState<TodoList>();
  const [openError, setOpenError] = useState("");

  const initializeTodos = useCallback(async () => {
    const todoList = await get("/api/todos");
    if (response.ok) setTodoList(todoList);
    else setOpenError("Problems loading todos from database");
  }, [response, get, setTodoList]);

  useEffect(() => {
    initializeTodos();
  }, [initializeTodos]);

  if (loading) {
    return <FullPageSpinner />;
  }

  const handleCloseError = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError("");
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Snackbar
          open={openError !== ""}
          onClose={handleCloseError}
          autoHideDuration={10000}
        >
          <Alert onClose={handleCloseError} severity="error">
            {openError}
          </Alert>
        </Snackbar>        
        
        {todoList && todoList?.todos.length > 0 && (
          <Grid item xs={12}>
            <div>
              {todoList?.todos.map(todo => (
                <div>{todo.description}</div>
              ))}
            </div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
