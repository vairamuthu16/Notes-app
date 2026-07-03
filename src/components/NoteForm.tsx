import { useState } from "react";

import { useNotes } from "../context/NotesContext";

export default function NoteForm() {
  const { createNote } =
    useNotes();

  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [tags, setTags] =
    useState("");

  const submitHandler = (
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
      onSubmit={submitHandler}
      className="bg-white rounded-xl p-5 shadow space-y-3"
    >
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
        className="w-full border rounded-lg p-3"
      />

      <textarea
        rows={4}
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
        className="w-full border rounded-lg p-3"
      />

      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) =>
          setTags(
            e.target.value
          )
        }
        className="w-full border rounded-lg p-3"
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Add Note
      </button>
    </form>
  );
}