import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useTask from "../Hooks/useTask";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const TaskList = ({ singleTask, index }) => {
  const [, refetch] = useTask();
  const { _id, task, description, status } = singleTask || {};

  // delete part

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://task-management-app-server-maksudur-pro.vercel.app/task/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  // status part
  const handleComplete = (id) => {
    fetch(
      `https://task-management-app-server-maksudur-pro.vercel.app/task/${id}`,
      {
        method: "PATCH",
      }
    )
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
      <td className={status === "complete" ? "line-through" : "none"}>
        {task}
      </td>
      <td className={status === "complete" ? "line-through" : "none"}>
        {description}
      </td>
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
        <Link to={`/update/${_id}`}>
          <button className="btn btn-info btn-sm hover:text-white">
            <FaEdit />
          </button>
        </Link>
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost btn-sm bg-red-600 text-white hover:text-black">
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default TaskList;
