import { createContext, useState, useEffect } from 'react';
import { getTodos } from '../services'

// More on interfaces and types
// https://www.typescriptlang.org/docs/handbook/2/objects.html

// Create an interface for Todo objects
export interface TodoI {
	// ? makes the property optional
	id?: number;
	taskName: string;
	completed: boolean
};

// Create a type for TodoContext
export type TodoContextType = {
	// todos is an array of objects implementing TodoI
	todos: TodoI[],
	setTodos: React.Dispatch<React.SetStateAction<TodoI[]>>
}

// Create TodoContext of type TodoContextType or null, initalize as null
export const TodoContext = createContext<TodoContextType | null>(null)

// Create a TodoProvider component
export const TodoProvider = (props: {children: React.ReactNode}) => {	
	// props.children contains the content between open and close tags of TodoProvider
	// More on props.children: https://reactjs.org/docs/glossary.html#propschildren

	// Create a state of type TodoI[], or an array of objects that extend TodoI and initalize it with []
	// More on useState(): https://reactjs.org/docs/hooks-state.html
    const [todos, setTodos] = useState<TodoI[]>([]);

	// useEffect() with an empty array passed so its content runs only on first render
	// More on useEffect(): https://reactjs.org/docs/hooks-effect.html
	useEffect(() => {
		// Create an async function to getTodos() and once the promise resolves, use setTodos()
		const fetchTodos = async () => {
			const {todos} = await getTodos();
			setTodos(todos)
		}
		
		fetchTodos()
	}, []);

    return (
		<>
			{/* Anything passed into value can be used by the children of this Provider */}
			<TodoContext.Provider value={{todos, setTodos}}>
				{props.children}
			</TodoContext.Provider>
		</>
    )
}