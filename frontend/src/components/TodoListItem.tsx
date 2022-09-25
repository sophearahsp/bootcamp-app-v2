import React from 'react';
import { ListItemText } from '@mui/material';

const TodoItem = (props: { taskName: string }) => {
    return (
        <ListItemText primary={props.taskName} />
    )
}

export default TodoItem;