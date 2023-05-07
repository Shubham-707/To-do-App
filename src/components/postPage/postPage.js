import React, { useState, Fragment } from "react";
import "./styles.css";
import { nanoid } from "nanoid";
import TableRow from "../tablerow/tablerow";
import EditableRow from "../Editablerow/Editablerow";
function PostPage() {
  const [tableData, settableData] = useState([]);
  const [editContactId, setEditContactId] = useState(null);
  const [inputeditable, setinputeditable] = useState(false);
  const [updatebutton, setupdatebutton] = useState(false);
  const [userpost, setuserpost] = useState({
    id: "",
    title: "",
    description: "",
  });
  React.useEffect(() => {
    settableData(tableData);
  }, []);
  const handlechange = (e) => {
    const { value, name } = e.target;
    const newData = { ...userpost };
    newData[name] = value;
    setuserpost(newData);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    const newentry = {
      id: nanoid(),
      title: userpost.title,
      description: userpost.description,
    };
    const temparr = [...tableData, newentry];
    settableData(temparr);
  };
  const handleUpdate = () => {
    console.log("kjjhbnh");
    setinputeditable(true);
    setupdatebutton(true);
  };

  const saveHandler = () => {
    setinputeditable(false);
    setupdatebutton(false);
  };
  console.log("tableData", tableData);

  const handleUpdateInput = (e) => {
    console.log(e.target.value);
    let updateArray = [];
    updateArray = tableData.filter((item) => item.id === e.target.id);
    updateArray[0].title = e.target.value;
    setEditContactId([...updateArray]);
  };

  const deleteHandler = (id) => {
    console.log(id);
    let updateArray = [];

    updateArray = tableData.filter((item) => item.id !== id);
    settableData([...updateArray]);
  };

  return (
    <div className="postHeader">
      <div className="inputcontainer">
        <div className="inputtitle">
          <div className="tittitle"> Title</div>
          <input
            type="text"
            name="title"
            onChange={handlechange}
            placeholder="Enter Title"
            className="posttitle"
          />
        </div>
        <div className="inputdes">
          <div className="destitle"> Description</div>
          <textarea
            type="text"
            name="description"
            onChange={handlechange}
            placeholder="Enter Text"
            className="postdes"
          />
        </div>
        <div className="submitbtn">
          <button type="button" onClick={handlesubmit}>
            Submit
          </button>
        </div>
      </div>
      <br />
      <div className="tablecontainer">
        <form>
          <table className="postTable">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            {tableData.map((entry) => {
              return (
                <Fragment>
                  {editContactId === entry.id ? (
                    <EditableRow />
                  ) : (
                    <TableRow
                      deleteHandler={deleteHandler}
                      saveHandler={saveHandler}
                      updatebutton={updatebutton}
                      handleUpdateInput={handleUpdateInput}
                      inputeditable={inputeditable}
                      entry={entry}
                      handleUpdate={handleUpdate}
                    />
                  )}
                </Fragment>
              );
            })}
          </table>
        </form>
      </div>
    </div>
  );
}
export default PostPage;
