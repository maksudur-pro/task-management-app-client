import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const TaskList = ({ singleTask, index }) => {
  const { _id, task, description } = singleTask || {};

  return (
    <tr>
      <td>{index + 1}.</td>
      <td>{task}</td>
      <td>{description}</td>
      <td>
        <button className="btn btn-success btn-xs">Complete</button>
      </td>
      <td>
        <button className="btn btn-info btn-sm hover:text-white">
          <FaEdit />
        </button>
      </td>
      <td>
        <button className="btn btn-ghost btn-sm bg-red-600 text-white hover:text-black">
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default TaskList;
