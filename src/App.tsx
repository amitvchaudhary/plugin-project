import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList/TodoList";

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      console.log("api response ---");
      console.log(response);
      setTodos(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        This is the Plugin Project 12345678910 app component.

        <TodoList data={todos}></TodoList>
      </header>
    </div>
  );
}

export default App;
