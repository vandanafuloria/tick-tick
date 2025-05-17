import { use, useState } from "react";

export default function Card({ detail, deleteTask }) {
  // const [isGreen, setIsGreen] = useState(false);
  // const [isSelect, setSelect] = useState("NOT_STARTED");
  // const [IsColor, setIsColor] = useState("plum");
  const [status, setStatus] = useState("NOT_STARTED");

  // function setGreenColor() {
  //   setIsGreen(true);
  //   console.log("it green color");
  // }
  // function removeGreenColor() {
  //   setIsGreen(false);
  // }

  // function checkSelectedValue(e) {
  //   const val = e.target.value;
  //   console.log;
  //   setSelect({ val });

  //   if (isSelect === "not started") setIsColor("red");
  //   else if (isSelect === "in progress") setIsColor("yellow");
  //   else setIsColor("green");

  //   console.log(val);
  // }

  // function deleteTask(e) {

  // }
  const { title, description, created, modified, id } = detail;

  //   console.log(props);
  return (
    <div className="card">
      <h6>{id}</h6>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>Created by:{created}</span>
      <span>Modified by: {modified}</span>
      <div className="editors">
        <button>Edit</button>

        <button
          // onMouseOver={setGreenColor}
          // onMouseLeave={removeGreenColor}
          onClick={function () {
            deleteTask(detail);
          }}
          // style={{ backgroundColor: isGreen ? "green" : "red" }}
        >
          Delete
        </button>
      </div>
      <select
        name="status"
        // onChange={checkSelectedValue} // the event here is onclick not behaving correct , here it should be onChange;
        style={{
          backgroundColor:
            status === "NOT_STARTED"
              ? "yellow"
              : status === "IN_PROGRESS"
              ? "orange"
              : "green",
        }}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="NOT_STARTED">Not started</option>
        <option value="IN_PROGRESS">In progress</option>
        <option value="COMPLETED">Completed</option>
      </select>
    </div>
  );
}
