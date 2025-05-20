import { useId, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TaskAddModal({ close, saveTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    const task = {
      title,
      description,
      status: "not-started",
      created: new Date().toLocaleString("en-US", {
        month: "long", // "May"
        day: "numeric", // "17"
        year: "numeric", // "2025"
        hour: "2-digit", // "02"
        minute: "2-digit", // "35"

        hour12: true, // Use 24-hour format
      }),
      modified: "Not Yet Modified",
      id: uuidv4(),
    };

    saveTask(task);
    console.log(task);
  };

  return (
    <div className="task">
      <div className="taskInput">
        <input
          type="text"
          placeholder="Add Task Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="taskButtons">
        <button onClick={handleSave}>Save</button>
        <button onClick={close}> Cancel </button>
      </div>
    </div>
  );
}
