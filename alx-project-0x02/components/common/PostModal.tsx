import React, { useState } from "react";

type Props = {
  onSubmit: (data: { title: string; content: string }) => void;
  onClose: () => void;
};

export default function ModalForm({ onSubmit, onClose }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="modal bg-amber-200">
      <form onSubmit={handleSubmit} className="flex justify-evenly items-center">
        <label>
          Title:
          <input className="bg-amber-50 " value={title} onChange={e => setTitle(e.target.value)} required />
        </label>
        <label>
          Content:
          <textarea className="bg-amber-50" value={content} onChange={e => setContent(e.target.value)} required />
        </label>
        <button className="bg-green-400 w-15.5 p-3 rounded-2xl" type="submit">Add</button>
        <button className="bg-red-600 w-18 p-3 rounded-2xl m-10" type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}