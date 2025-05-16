export default function Card({ detail }) {
  const { title, desc, created, modified, status } = detail;

  //   console.log(props);
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{desc}</p>

      <span>Created by:{created}</span>

      <span>Modified by: {modified}</span>
      <div className="editors">
        <button>Edit</button>
        <button>Delete</button>
      </div>

      <select name="status">
        <option value="not started">Not started</option>
        <option value="in progress">In progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}
