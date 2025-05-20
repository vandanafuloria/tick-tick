import { useId, useState } from "react";

import "./App.css";
import checked from "./assets/checked.png";
import coffee from "./assets/coffee.png";
import add from "./assets/add.png";
import Card from "./card.jsx";

import TaskAddModal from "./TaskAdd.jsx";

import "./utils.css";

const tasks = [
  {
    title: "Design Homepage",
    desc: "Create wireframes and mockups for the new homepage redesign.",
    created: new Date().toLocaleString(),
    modified: "Not Modified Yet",
    status: "Not started",
  },
  {
    title: "Fix Login Bug",
    desc: "Resolve issue where users can't log in with special characters.",
    created: new Date().toLocaleString(),
    modified: "Not Modified Yet",
    status: "In progress",
  },
  {
    title: "Write Unit Tests",
    desc: "Add test cases for the user authentication module.",
    created: new Date().toLocaleString(),
    modified: "Not Modified Yet",
    status: "Not started",
  },
  {
    title: "Deploy to Production",
    desc: "Push the latest stable build to the production server.",
    created: new Date().toLocaleString(),
    modified: "Not Modified Yet",
    status: "Completed",
  },
  {
    title: "Update Documentation",
    desc: "Review and update API docs for all major endpoints.",
    created: new Date().toLocaleString(),
    modified: "Not Modified Yet",
    status: "In progress",
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("Edit");

  const [readOnly, setReadOnly] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  console.log(todos);

  function deleteTask(task) {
    console.log("deleting task ");
    console.log(task);

    setTodos(todos.filter((t) => t.id != task.id));
  }
  function editHandler(text) {
    if (text == "Edit") {
      setReadOnly(false);
      setText("Save");
    } else {
      setReadOnly(true);
      setText("Edit");
    }
  }

  const handleEditTask = (task) => {
    // console.log(task);
    task.modified = new Date().toLocaleString("en-US", {
      month: "long", // "May"
      day: "numeric", // "17"
      year: "numeric", // "2025"
      hour: "2-digit", // "02"
      minute: "2-digit", // "35"

      hour12: true, // Use 24-hour format
    });
    setTodos(todos.map((t) => (t.id != task.id ? t : task)));
  };

  const handleSaveTask = (task) => {
    console.log("calling from parent: ");
    // tasks.push(task);
    setTodos([...todos, task]);
    closeModal();
  };

  return (
    <div>
      <header className="d-flex">
        <div className="logo">
          <img src={checked} alt="logo" />,<h2>Tick-Tick</h2>
        </div>
        <div className="addTask">
          <div className="addTaskLogo" onClick={() => setIsModalOpen(true)}>
            <img src={add} alt="" />
            <span>Add task</span>
          </div>
          <div className="coffee">
            <img src={coffee} alt="coffee" />
            <span>Buy Me a Coffee</span>
          </div>
        </div>
      </header>
      <div className="dialog-box">
        {/* codintional rendering */}
        {isModalOpen && (
          <TaskAddModal close={closeModal} saveTask={handleSaveTask} />
        )}
      </div>

      <div className="task-box">
        {todos.map((t) => {
          // console.log(t);

          return (
            <Card
              detail={t}
              deleteTask={deleteTask}
              editTask={handleEditTask}
              saveTask={handleSaveTask}
              text={text}
              readOnly={readOnly}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
