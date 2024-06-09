import React, { useState } from "react";
import { MdOutlineAddToQueue } from "react-icons/md";
import style from "./AddTodo.module.css";

export default function AddTodo({ onNewADD }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNameChange = (event) => {
    // console.log(`${name} is typed`)
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleAdd = () => {
    onNewADD(name, date);
    setName("");
    setDate("");
  };

  return (
    <>
      <tr>
        <td colSpan={2}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter todo name"
            value={name}
            onChange={handleNameChange}
          />
        </td>
        <td>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </td>
        <td>
          <button className={style.addTodobtn} onClick={handleAdd}>
            <MdOutlineAddToQueue />
          </button>
        </td>
      </tr>
    </>
  );
}
