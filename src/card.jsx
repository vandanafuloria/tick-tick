export default function Card(props) {
  const { title, desc, created, modified, status } = props;

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{desc}</p>

      <span>Created by:{created}</span>
      <span>Modified by: {modified}</span>
      <button>Edit</button>
      <button>Delete</button>
      <h4>Not Started </h4>
    </div>
  );
}
