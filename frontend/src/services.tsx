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

export async function addTodo(newTodo: TodoI) {
	try {
		const response = await axios.post(`${TODO_API_URL}/todos`, newTodo);
		return response.data;
	} catch (e) {
		throw new Error("Error in Axios query");
	}
}
