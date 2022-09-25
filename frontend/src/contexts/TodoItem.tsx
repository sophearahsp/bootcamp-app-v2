import { createContext, useState, useEffect } from 'react';
import { getTodos } from '../services'

export interface TodoI {
	id?: number;
	taskName: string;
	completed: boolean
};

export type TodoContextType = {
	todos: TodoI[],
	setTodos: React.Dispatch<React.SetStateAction<TodoI[]>>
}

export const TodoContext = createContext<TodoContextType | null>(null)

export const TodoProvider = (props: {children: React.ReactNode}) => {
    const [todos, setTodos] = useState<TodoI[]>([]);

	useEffect(() => {
		const fetchTodos = async () => {
			const {todos} = await getTodos();
			setTodos(todos)
		}
		
		fetchTodos()
	}, []);

    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            {props.children}
		</TodoContext.Provider>
    )
}