import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useTask from "../Hooks/useTask";
import Swal from "sweetalert2";

const TaskList = ({ singleTask, index }) => {
  const [, refetch] = useTask();
  const { _id, task, description, status } = singleTask || {};

  const handleComplete = (id) => {
    fetch(`http://localhost:5000/task/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire("Good job!", "Task Strikethrough Successfully!", "success");
        }
      });
  };

  return (
    <tr>
      <td>{index + 1}.</td>
      <td className={status === "complete" && "line-through"}>{task}</td>
      <td className={status === "complete" && "line-through"}>{description}</td>
      <td>
        <button
          disabled={status === "complete"}
          onClick={() => handleComplete(_id)}
          className="btn btn-success btn-xs">
          {status === "complete" ? (
            <span>completed</span>
          ) : (
            <span>pending</span>
          )}
        </button>
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
