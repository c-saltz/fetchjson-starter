import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/16";

// Define the structure of the Todo object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo: Todo = response.data;
  logTodo(todo.id, todo.title, todo.completed);
}).catch(error => {
  console.error("Error fetching data:", error);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    ID: ${id}
    Title: ${title}
    Completed: ${completed}
  `);
};

export default axios;