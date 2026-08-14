import { Link } from "react-router";

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

function TaskList() {
  return (
    <div className="task-list">
      <h1>Task Management</h1>

      <p>Select a task to view its details</p>

      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          <h2>{task.title}</h2>

          <Link to={`/task/${task.id}`}>View Task</Link>
        </div>
      ))}
    </div>
  );
}

export default TaskList;