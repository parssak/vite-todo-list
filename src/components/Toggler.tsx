import { useState } from "react";

export const Toggler = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="p-1 border rounded">
      <p>{enabled ? "this is enabled" : "this is disabled"}</p>
      <button
        onClick={() => setEnabled((previous) => !previous)}
        className="px-2 py-1 bg-indigo-500 text-white"
      >
        Toggle
      </button>
    </div>
  );
};
