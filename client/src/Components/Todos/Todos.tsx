import { Grid, Snackbar } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';

import { Alert } from '@material-ui/lab';
import { FullPageSpinner } from '../View/FullPageSpinner';
import { TodoList } from '../../_types/models';
import useFetch from 'use-http';

export const Todos: React.FC = () => {
    const { get, response, loading } = useFetch({}, []);
    const [todoList, setTodoList] = useState<TodoList>();
    const [openError, setOpenError] = useState('');

    const initializeTodos = useCallback(async () => {
        const todoList = await get('/api/todos');
        if (response.ok) setTodoList(todoList);
        else setOpenError('Problems loading todos from database');
    }, [response, get, setTodoList]);

    useEffect(() => {
        initializeTodos();
    }, [initializeTodos]);

    if (loading) {
        return <FullPageSpinner />;
    }

    const handleCloseError = (reason?: string): void => {
        if (reason !== 'clickaway') {
            setOpenError('');
        }
    };

    return (
        <div>
            <Grid container spacing={2}>
                <Snackbar
                    open={openError !== ''}
                    onClose={(): void => {
                        handleCloseError();
                    }}
                    autoHideDuration={10000}
                >
                    <Alert
                        onClose={(): void => {
                            handleCloseError();
                        }}
                        severity="error"
                    >
                        {openError}
                    </Alert>
                </Snackbar>

                {todoList && todoList?.todos.length > 0 && (
                    <Grid item xs={12}>
                        <div>
                            {todoList?.todos.map((todo, key) => (
                                <div key={key}>{todo.description}</div>
                            ))}
                        </div>
                    </Grid>
                )}
            </Grid>
        </div>
    );
};
