import { useState } from "react";

const BugEdit = ({ createNew }) => {
  const [newBugName, setNewBugName] = useState("");
  return (
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input type="text" onInput={(evt) => setNewBugName(evt.target.value)} />
      <label htmlFor="">Project : </label>
      <select>
        {/* list the projects here */}
      </select>
      <button onClick={() => createNew(newBugName)}>Add New</button>
    </section>
  );
};
export default BugEdit;