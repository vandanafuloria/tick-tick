import { useState } from "react";

export default function TaskAddModal({ close, saveTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("Description");

  const handleSave = () => {
    const task = { title, description, status: "not-started" };

    saveTask(task);
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
