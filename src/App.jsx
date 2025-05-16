import { useState } from "react";
import "./App.css";
import checked from "./assets/checked.png";
import coffee from "./assets/coffee.png";
import add from "./assets/add.png";
import Card from "./card.jsx";

import TaskAddModal from "./TaskAdd.jsx";
import "./utils.css";

const card = {
  title: "first task test",
  desc: "this is descritption, lets see how it works",
  created: new Date().toLocaleString(),
  modified: "Not Modified Yet",
  status: "Not started",
};

function App() {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal, setOpenModal);

  return (
    <div>
      <header className="d-flex">
        <div className="logo">
          <img src={checked} alt="logo" />
          <h3>Tick-Tick</h3>
        </div>
        <div className="addTask">
          <div className="addTaskLogo" onClick={() => setOpenModal(true)}>
            <img src={add} alt="" />
            <span>Add task</span>
          </div>
          <div>
            <img src={coffee} alt="coffee" />
            <span>Buy Me a Coffee</span>
          </div>
        </div>
      </header>

      <div className="tasks-box">
        <Card {...card} />
        {openModal && <TaskAddModal Modal={setOpenModal} />}
      </div>
    </div>
  );
}

export default App;
