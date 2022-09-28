// Import from node_modules
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import components from other files
import TodoApp from "./components/TodoApp";
import AboutPage from "./components/AboutPage";
import { TodoProvider } from './contexts/TodoItem'

// Create a functional component
const App = () => {
	return (
		<>
			{/* Allow the other components to access the TodoContext */}
			<TodoProvider>
				{/* Wrap Routes with a BrowserRouter and Routes */}
				<BrowserRouter>
					<Routes>
						{/* Define Route and the component they render */}
						<Route path="/" element={<TodoApp />} />
						<Route path="/about" element={<AboutPage />} />
					</Routes>
				</BrowserRouter>
			</TodoProvider>
		</>
	);
}
// Export default means you only want to export one value from this file
export default App;
