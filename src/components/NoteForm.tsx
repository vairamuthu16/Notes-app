import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNotes } from "../context/NotesContext";

export default function NoteForm() {
  const { createNote } = useNotes();

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [tags, setTags] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !title.trim() ||
      !description.trim()
    )
      return;

    createNote(
      title,
      description,
      tags
        .split(",")
        .map((tag) =>
          tag.trim()
        )
        .filter(Boolean)
    );

    setTitle("");
    setDescription("");
    setTags("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-md p-6 mb-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        Create Note
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter note title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          rows={5}
          placeholder="Write your note..."
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Tags (React, Work, Personal)"
          value={tags}
          onChange={(e) =>
            setTags(e.target.value)
          }
          className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
        >
          <FaPlus />
          Add Note
        </button>
      </div>
    </form>
  );
}