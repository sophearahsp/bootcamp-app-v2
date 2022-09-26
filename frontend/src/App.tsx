import TodoApp from "./components/TodoApp";
import { TodoProvider } from './contexts/TodoItem'

function App() {
	return (
		<TodoProvider>
			<TodoApp/>
		</TodoProvider>
	);
}

export default App;
