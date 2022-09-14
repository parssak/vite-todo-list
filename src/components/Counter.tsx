import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-1 border rounded">
      <p>{count}</p>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setCount((previous) => previous + 1)}
          className="px-2 py-1 bg-indigo-500 text-white"
        >
          Increment
        </button>
        <button
          onClick={() => setCount((previous) => previous - 1)}
          className="px-2 py-1 bg-indigo-500 text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
