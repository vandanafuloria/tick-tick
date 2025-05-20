import { use, useState } from "react";

export default function Card({
  detail,
  deleteTask,
  editTask,
  saveTask,
  text,
  readOnly,
}) {
  // const [isGreen, setIsGreen] = useState(false);
  // const [isSelect, setSelect] = useState("NOT_STARTED");
  // const [IsColor, setIsColor] = useState("plum");
  // const [status, setStatus] = useState("NOT_STARTED");

  const [titl, setTitle] = useState(detail.title);
  const [desc, setDescription] = useState(detail.description);

  const [isEditing, setIsEditing] = useState(false);

  const { title, description, created, modified, status } = detail;
  // console.log(detail);
  // console.log(titl);

  return (
    <div className="card">
      <input
        type="text"
        value={titl}
        readOnly={!isEditing}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        value={desc}
        readOnly={!isEditing}
        onChange={(e) => setDescription(e.target.value)}
      />
      <span>Created by : {created}</span>
      <span>Modified by : {modified}</span>
      <div className="editors">
        <button
          onClick={() => {
            if (isEditing)
              editTask({
                ...detail,
                title: titl,
                description: desc,
                status: status,
              });
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>

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
        // onChange={(e) => setStatus(e.target.value)}
        onChange={(e) => editTask({ ...detail, status: e.target.value })}
      >
        <option value="NOT_STARTED">Not started</option>
        <option value="IN_PROGRESS">In progress</option>
        <option value="COMPLETED">Completed</option>
      </select>
    </div>
  );
}
