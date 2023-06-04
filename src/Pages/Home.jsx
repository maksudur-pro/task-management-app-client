import React from "react";
import InputForm from "./InputForm";
import TaskList from "./TaskList";

const Home = () => {
  return (
    <div className="mx-auto">
      <div className="flex lg:flex-row flex-col-reverse">
        <div className="lg:w-3/5">
          <div className="overflow-x-auto mt-8 lg:w-4/6 w-screen mx-auto">
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
              <tbody></tbody>
            </table>
          </div>
        </div>
        <div className="lg:w-2/5">
          <InputForm></InputForm>
        </div>
      </div>
    </div>
  );
};

export default Home;
