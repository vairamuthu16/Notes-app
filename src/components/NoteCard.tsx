import { useState } from "react";
import {
  FaThumbtack,
  FaArchive,
  FaTrash,
  FaEdit,
  FaEye,
  FaUndo,
  FaSave,
} from "react-icons/fa";

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

  const [showModal, setShowModal] =
    useState(false);

  const [editing, setEditing] =
    useState(false);

  const [title, setTitle] =
    useState(note.title);

  const [description, setDescription] =
    useState(note.description);

  const [tags, setTags] =
    useState(
      note.tags?.join(", ") || ""
    );

  const saveChanges = () => {
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
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-5">
        {editing ? (
          <>
            <input
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              className="w-full border rounded-lg p-2 mb-2"
            />

            <textarea
              rows={4}
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="w-full border rounded-lg p-2 mb-2"
            />

            <input
              value={tags}
              onChange={(e) =>
                setTags(
                  e.target.value
                )
              }
              className="w-full border rounded-lg p-2 mb-3"
            />

            <button
              onClick={saveChanges}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              <FaSave />
              Save
            </button>
          </>
        ) : (
          <>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg">
                {note.title}
              </h3>

              {note.pinned && (
                <FaThumbtack className="text-yellow-500" />
              )}
            </div>

            <p className="text-gray-600 mt-3 line-clamp-4">
              {note.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {(note.tags || []).map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                  >
                    #{tag}
                  </span>
                )
              )}
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Created:{" "}
              {new Date(
                note.createdAt
              ).toLocaleDateString()}
            </p>

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
                      className="p-2 border rounded-lg hover:bg-gray-100"
                    >
                      <FaThumbtack />
                    </button>

                    <button
                      onClick={() =>
                        archiveNote(
                          note.id
                        )
                      }
                      className="p-2 border rounded-lg hover:bg-gray-100"
                    >
                      <FaArchive />
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
                  className="p-2 border rounded-lg hover:bg-gray-100"
                >
                  <FaUndo />
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
                    className="p-2 border rounded-lg hover:bg-gray-100"
                  >
                    <FaUndo />
                  </button>

                  <button
                    onClick={() =>
                      deleteForever(
                        note.id
                      )
                    }
                    className="p-2 bg-red-600 text-white rounded-lg"
                  >
                    <FaTrash />
                  </button>
                </>
              ) : (
                <button
                  onClick={() =>
                    trashNote(
                      note.id
                    )
                  }
                  className="p-2 border rounded-lg hover:bg-gray-100"
                >
                  <FaTrash />
                </button>
              )}

              {!note.trashed && (
                <>
                  <button
                    onClick={() =>
                      setEditing(
                        true
                      )
                    }
                    className="p-2 border rounded-lg hover:bg-gray-100"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() =>
                      setShowModal(
                        true
                      )
                    }
                    className="p-2 border rounded-lg hover:bg-gray-100"
                  >
                    <FaEye />
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>

      {showModal && (
        <NoteModal
          note={note}
          onClose={() =>
            setShowModal(false)
          }
        />
      )}
    </>
  );
}