import TodoApp from "./components/TodoApp";
import AboutPage from "./components/AboutPage";
import { TodoProvider } from './contexts/TodoItem'
import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";

function App() {
	return (
		<TodoProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TodoApp />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</TodoProvider>
	);
}

export default App;
