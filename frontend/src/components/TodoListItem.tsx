import { Checkbox, FormControlLabel  } from '@mui/material';

const TodoItem = (props: { taskName: string }) => {
    return (
        <FormControlLabel control={<Checkbox />} label={props.taskName} />
    )
}

export default TodoItem;