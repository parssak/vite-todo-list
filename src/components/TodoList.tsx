import React, { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const DEFAULT_TASKS = [
  {
    id: 1,
    title: "Learn React",
    completed: false
  },
  {
    id: 2,
    title: "Learn TypeScript",
    completed: false
  }
];

export const TodoList = ({ ...props }: Props) => {
  const [query, setQuery] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);

  const onQueryEnter = () => {
    setTasks(previousTasks => {
      const newTask = {
        id: Date.now(),
        title: query,
        completed: false
      }
      return [...previousTasks, newTask];
    })
    setQuery("");
  };

  return (
    <div {...props}>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            onQueryEnter();
          }
        }}
        className="p-1 border border-black"
      />
      <button onClick={onQueryEnter}>Add todo</button>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
};
