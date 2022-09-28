import axios from "axios";
import { TodoI } from "./contexts/TodoItem";

// Define URL of API
const TODO_API_URL = "http://localhost:3001/api";

// The following makes HTTP requests using axios to specified URLs
// https://axios-http.com/docs/api_intro

export async function getTodos() {
	try {
		// Uses axios to make a get request at "http://localhost:3001/api/todos"
		const response = await axios.get(`${TODO_API_URL}/todos`);
		// Use template strings to put variables into strings
		// More on template strings: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html 
		return response.data;
	} catch (e) {
		throw new Error("Error in Axios query");
	}
}

export async function deleteTodo(id: number) {
	// try...catch statements helps us catch errors when they occur
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
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