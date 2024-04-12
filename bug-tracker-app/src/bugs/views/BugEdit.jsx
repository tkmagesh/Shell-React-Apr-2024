import { useState } from "react";

const BugEdit = ({ createNew, projects }) => {
  const [newBugName, setNewBugName] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState(0)
  return (
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input type="text" onInput={(evt) => setNewBugName(evt.target.value)} />
      <label htmlFor="">Project : </label>
      <select
        onChange={(evt) => setSelectedProjectId(parseInt(evt.target.value))}
      >
        <option value="">---Select---</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        ))}
      </select>
      <button onClick={() => createNew(newBugName, selectedProjectId)}>
        Add New
      </button>
    </section>
  );
};
export default BugEdit;