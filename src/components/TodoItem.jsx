import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export default function TodoItem({ name, date, onDeleteClick }) {
  return (
    <>
      <tr>
        <td colSpan={2}>
          <p>{name}</p>
        </td>
        <td>{date}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteClick(name)}
          >
            <RiDeleteBinLine />
          </button>
        </td>
      </tr>
    </>
  );
}
