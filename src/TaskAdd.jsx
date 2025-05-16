export default function TaskAddModal({ Modal }) {
  return (
    <div className="task">
      <div className="taskInput">
        {" "}
        <input type="text" placeholder="Add Task Here" />
      </div>

      <p contentEditable>Description: </p>
      <div className="taskButtons">
        <button>Save</button>
        <button> Cancel </button>
      </div>
    </div>
  );
}
