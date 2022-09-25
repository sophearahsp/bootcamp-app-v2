import { createContext, useState } from 'react';

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

    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            {props.children}
		</TodoContext.Provider>
    )
}