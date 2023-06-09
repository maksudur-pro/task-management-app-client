import Swal from "sweetalert2";
import useTask from "../Hooks/useTask";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useTask();

  const handlePost = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    const description = event.target.description.value;
    const email = user?.email;
    const data = { task, description, email };
    const url = `https://task-management-app-server-maksudur-pro.vercel.app/task`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Good job!", "Task Added Successfully!", "success");
          refetch();
          event.target.reset();
        }
      });
  };

  return (
    <form onSubmit={handlePost}>
      <div className="card  bg-base-100 shadow-2xl mx-auto mt-8 w-full">
        <h1 className="text-center text-3xl font-bold">Add Task</h1>
        <div className="card-body w-full lg:mx-auto lg:px-12">
          <input
            type="text"
            required
            name="task"
            placeholder="Task Name"
            className="input input-bordered w-full "
          />
          <textarea
            required
            className="textarea input-bordered w-full "
            rows={4}
            cols={64}
            name="description"
            placeholder="Task Description"></textarea>
          <div className="card-actions justify-start">
            <button className="btn btn-success text-white btn-block">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddTask;
