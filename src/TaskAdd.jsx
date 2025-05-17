import { useId, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TaskAddModal({ close, saveTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("Description");

  const handleSave = () => {
    const task = { title, description, status: "not-started", id: uuidv4() };

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
