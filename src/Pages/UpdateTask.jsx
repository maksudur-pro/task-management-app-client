import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import updateAni from "../../src/assets/update.json";
import Swal from "sweetalert2";
import useTask from "../Hooks/useTask";

const UpdateTask = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const { _id, task, description } = data;
  const handleUpdate = (event) => {
    event.preventDefault();
    const task = event.target.task.value;
    const description = event.target.description.value;
    const data = { task, description };
    const url = `http://localhost:5000/update/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Task updated Successfully!", "success");
          navigate("/");
        }
      });
  };

  return (
    <div className="hero-content lg:mt-10 p-0 w-full flex-col-reverse lg:flex-row">
      <div className="text-center lg:text-left lg:w-1/2">
        <Lottie
          className="h-[500px]"
          animationData={updateAni}
          loop={true}></Lottie>
      </div>
      <div className="flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleUpdate}>
          <div className="card  bg-base-100 shadow-2xl mx-auto mt-8 w-full">
            <h1 className="text-center text-3xl font-bold">Update Task</h1>
            <div className="card-body w-full lg:mx-auto lg:px-12">
              <input
                type="text"
                name="task"
                defaultValue={task}
                className="input input-bordered w-full "
              />
              <textarea
                required
                className="textarea input-bordered w-full "
                rows={4}
                cols={64}
                name="description"
                defaultValue={description}></textarea>
              <div className="card-actions justify-start">
                <button className="btn btn-success text-white btn-block">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
