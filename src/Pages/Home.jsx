import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import useTask from "../Hooks/useTask";
import Lottie from "lottie-react";
import noFound from "../../src/assets/nodata.json";

const Home = () => {
  const [tasks] = useTask();

  return (
    <div className="mx-auto">
      <div className="flex lg:flex-row flex-col-reverse mt-4">
        <div className="lg:w-3/5">
          <div className="overflow-x-auto mt-8 lg:w-4/6 w-screen mx-auto">
            {tasks.length === 0 ? (
              <>
                <Lottie
                  className="h-60"
                  animationData={noFound}
                  loop={true}></Lottie>
                <p className="text-center text-xl font-bold">
                  No tasks found add a tasks!!
                </p>
              </>
            ) : (
              <table className="table table-compact w-full">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((singleTask, index) => (
                    <TaskList
                      key={singleTask._id}
                      singleTask={singleTask}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="lg:w-2/5">
          <AddTask></AddTask>
        </div>
      </div>
    </div>
  );
};

export default Home;
