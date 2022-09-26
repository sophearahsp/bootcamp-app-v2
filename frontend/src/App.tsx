import TodoInput from "./components/TodoInput";
import TodoDisplay from "./components/TodoDisplay";
import { TodoProvider } from './contexts/TodoItem'
import { Box, Typography, CircularProgress } from '@mui/material';

function App() {
	return (
		<TodoProvider>
			<Box sx={{
				justifyContent: 'center',
				display: 'flex',
			}}>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					width: '60%'
				}}>
					<Typography variant="h4" sx={{fontWeight: '600', color: '#0069CA', margin: '24px 0px 48px 0px'}}> Todo App </Typography>						
					<TodoInput/>
					<TodoDisplay/>
				</Box>
			</Box>
		</TodoProvider>
	);
}

export default App;
