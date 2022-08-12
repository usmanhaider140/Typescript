import React, { useState } from "react";

interface NewReminderProps {
  submitReminder: (title: string) => void;
}

const NewReminder = ({ submitReminder }: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || title.length < 1) return;
    submitReminder(title);
    setTitle("");
  };
  return (
    <form className="form" onSubmit={submitForm}>
      <label htmlFor="title">Add New Reminder</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Reminder Title"
        className="form-control"
      />
      <div className="mt-2 mb-2 d-flex justify-content-end">
        <button className="btn btn-primary rounded-pill px-4" type="submit">
          + Add
        </button>
      </div>
    </form>
  );
};

export default NewReminder;
