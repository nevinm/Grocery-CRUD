import { useState } from "react";

export function NewTodoForm({ addToDo }) {
  const [newItem, setNewItem] = useState("");

  const handleFormSubmit = (e) => {
    if (newItem.length === 0) {
      return;
    }

    e.preventDefault();
    addToDo(newItem);
    setNewItem("");
  };

  return (
    <form className="new-item-form" onSubmit={handleFormSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>{" "}
    </form>
  );
}
