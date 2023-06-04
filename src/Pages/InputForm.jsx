import React from "react";

const InputForm = () => {
  return (
    <form>
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

export default InputForm;
