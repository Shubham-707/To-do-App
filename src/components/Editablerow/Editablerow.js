import React from "react";

function EditableRow() {
  return (
    <tr>
      <td>
        <input
          type="text"
          className="edittitle"
          placeholder="Enter titile"
          name="edittit"
        ></input>
      </td>
      <td>
        <textarea
          type="text"
          className="editdes"
          name="editdes"
          placeholder="Enter Description"
        ></textarea>
      </td>
      <td></td>
      <td></td>
    </tr>
  );
}
export default EditableRow;
