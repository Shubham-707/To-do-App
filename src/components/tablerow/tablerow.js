import React, { useState } from "react";
import "./tablerow.css";

function TableRow({
  entry,
  handleUpdate,
  inputeditable,
  handleUpdateInput,
  updatebutton,
  saveHandler,
  deleteHandler,
}) {
  return (
    <tbody>
      <tr>
        <td>
          {inputeditable ? (
            <input id={entry.id} onChange={handleUpdateInput}></input>
          ) : (
            entry.title
          )}
        </td>
        <td>{entry.description}</td>
        <td>
          <button
            type="button"
            className="Updatebtn"
            onClick={updatebutton ? () => saveHandler() : () => handleUpdate()}
          >
            {updatebutton ? "Save" : "Update"}
          </button>
        </td>
        <td>
          <button
            type="button"
            className="deletebtn"
            onClick={() => deleteHandler(entry.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}
export default TableRow;
