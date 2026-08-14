import { Link, useParams } from "react-router";

const tasks = [
    {
        id: 1,
        title: "washing dishes",
        description: "soap and water with a scrub brush, then place into dishwasher."
    },
    {
        id: 2,
        title: "vacuum carpet",
        description: "plug in vaccum, sprinkle carpet cleaner, then run vaccum."
    },
    {
        id: 3,
        title: "laundry",
        description: "place dark clothes together, wash on cool cycle."
    }
];

function TaskDetail() {
  const { id } = useParams();

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return (
      <div className="task-detail">
        <h1>Task Not Found</h1>
        <p>Sorry, the task you are looking for does not exist.</p>

        <Link to="/">Back to Tasks</Link>
      </div>
    );
  }

  return (
    <div className="task-detail">
      <h1>{task.title}</h1>

      <p>{task.description}</p>

      <p>
        <strong>Task ID:</strong> {task.id}
      </p>

      <Link to="/">Back to Tasks</Link>
    </div>
  );
}

export default TaskDetail;

