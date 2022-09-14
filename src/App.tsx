import { useState } from "react";
import { TodoList } from "./components/TodoList";
import "./index.css";

const App = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      <TodoList />
    </div>
  );
};

export default App;
