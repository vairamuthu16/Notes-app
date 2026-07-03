import { useState } from "react";

import type { Note } from "../types/note";

import { useNotes } from "../context/NotesContext";

import NoteModal from "./NoteModal";

interface Props {
  note: Note;
}

export default function NoteCard({
  note,
}: Props) {
  const {
    togglePin,
    archiveNote,
    restoreArchive,
    trashNote,
    restoreTrash,
    deleteForever,
    updateNote,
  } = useNotes();

  const [open, setOpen] =
    useState(false);

  const [editing, setEditing] =
    useState(false);

  const [title, setTitle] =
    useState(note.title);

  const [
    description,
    setDescription,
  ] = useState(
    note.description
  );

  const [tags, setTags] =
    useState(
      note.tags.join(", ")
    );

  const saveEdit = () => {
    updateNote(
      note.id,
      title,
      description,
      tags
        .split(",")
        .map((tag) =>
          tag.trim()
        )
        .filter(Boolean)
    );

    setEditing(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow p-4">
        {editing ? (
          <>
            <input
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              className="border p-2 rounded w-full mb-2"
            />

            <textarea
              rows={4}
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="border p-2 rounded w-full mb-2"
            />

            <input
              value={tags}
              onChange={(e) =>
                setTags(
                  e.target.value
                )
              }
              className="border p-2 rounded w-full mb-2"
            />

            <button
              onClick={saveEdit}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-between">
              <h3 className="font-bold text-lg">
                {note.title}
              </h3>

              {note.pinned && (
                <span>
                  📌
                </span>
              )}
            </div>

            <p className="mt-2 text-gray-600 line-clamp-3">
              {note.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-3">
              {note.tags.map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 px-2 py-1 rounded text-sm"
                  >
                    #{tag}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {!note.archived &&
                !note.trashed && (
                  <>
                    <button
                      onClick={() =>
                        togglePin(
                          note.id
                        )
                      }
                      className="border px-2 py-1 rounded"
                    >
                      {note.pinned
                        ? "Unpin"
                        : "Pin"}
                    </button>

                    <button
                      onClick={() =>
                        archiveNote(
                          note.id
                        )
                      }
                      className="border px-2 py-1 rounded"
                    >
                      Archive
                    </button>
                  </>
                )}

              {note.archived && (
                <button
                  onClick={() =>
                    restoreArchive(
                      note.id
                    )
                  }
                  className="border px-2 py-1 rounded"
                >
                  Restore
                </button>
              )}

              {note.trashed ? (
                <>
                  <button
                    onClick={() =>
                      restoreTrash(
                        note.id
                      )
                    }
                    className="border px-2 py-1 rounded"
                  >
                    Restore
                  </button>

                  <button
                    onClick={() =>
                      deleteForever(
                        note.id
                      )
                    }
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete Forever
                  </button>
                </>
              ) : (
                <button
                  onClick={() =>
                    trashNote(
                      note.id
                    )
                  }
                  className="border px-2 py-1 rounded"
                >
                  Trash
                </button>
              )}

              {!note.trashed && (
                <>
                  <button
                    onClick={() =>
                      setEditing(
                        !editing
                      )
                    }
                    className="border px-2 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      setOpen(true)
                    }
                    className="border px-2 py-1 rounded"
                  >
                    View
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>

      {open && (
        <NoteModal
          note={note}
          onClose={() =>
            setOpen(false)
          }
        />
      )}
    </>
  );
}