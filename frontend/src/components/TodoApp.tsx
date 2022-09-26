import React from 'react';
import TodoInput from "./TodoInput";
import TodoDisplay from "./TodoDisplay";
import { Box, Container, Typography } from '@mui/material';

const TodoApp = () => {
    return (
        <Container maxWidth="md" >
            <Typography variant="h4" sx={{fontWeight: '600', color: '#0069CA', margin: '24px 0px 48px 0px'}}> Todo App </Typography>						
            <TodoInput/>
            <TodoDisplay/>
        </Container>
    )
}

export default TodoApp;