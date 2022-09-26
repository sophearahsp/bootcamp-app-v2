import axios from "axios";
import { TodoI } from "./contexts/TodoItem";

const TODO_API_URL = "http://localhost:3001/api";

export async function getTodos() {
	try {
		const response = await axios.get(`${TODO_API_URL}/todos`);
		return response.data;
	} catch (e) {
		throw new Error("Error in Axios query");
	}
}

export async function deleteTodo(id: number) {
	try {
		const response = await axios.delete(`${TODO_API_URL}/todo/${id.toString()}`);
		return response;
	} catch (e) {
		throw new Error("Error in Axios query");
	}
}

export async function addTodo(newTodo: TodoI) {
	try {
		const response = await axios.post(`${TODO_API_URL}/todos`, newTodo);
		return response.data;
	} catch (e) {
		throw new Error("Error in Axios query");
	}
}

export async function updateTodo(todo: TodoI) {
	try {
		if (!todo.id) throw "no id"
		
		const response = await axios.put(`${TODO_API_URL}/todo/${todo.id.toString()}`, todo);
		return response.data;
	} catch (e) {
		throw new Error("Error in Axios query");
	}
}