import TodoInput from "./components/TodoInput";
import TodoDisplay from "./components/TodoDisplay";
import { TodoProvider } from './contexts/TodoItem'

function App() {
	return (
		<TodoProvider>
			<TodoInput/>
			<TodoDisplay/>
		</TodoProvider>
	);
}

export default App;
