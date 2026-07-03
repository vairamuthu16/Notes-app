import {
  createContext,
  useContext,
  type ReactNode,
} from "react";

import { v4 as uuid } from "uuid";

import type { Note } from "../types/note";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface NotesContextType {
  notes: Note[];

  createNote: (
    title: string,
    description: string,
    tags: string[]
  ) => void;

  updateNote: (
    id: string,
    title: string,
    description: string,
    tags: string[]
  ) => void;

  togglePin: (
    id: string
  ) => void;

  archiveNote: (
    id: string
  ) => void;

  restoreArchive: (
    id: string
  ) => void;

  trashNote: (
    id: string
  ) => void;

  restoreTrash: (
    id: string
  ) => void;

  deleteForever: (
    id: string
  ) => void;
}

const NotesContext =
  createContext<NotesContextType | null>(
    null
  );

export const NotesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [notes, setNotes] =
    useLocalStorage<Note[]>(
      "notes",
      []
    );

  const createNote = (
    title: string,
    description: string,
    tags: string[]
  ) => {
    const note: Note = {
      id: uuid(),

      title,
      description,
      tags,

      pinned: false,
      archived: false,
      trashed: false,

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),
    };

    setNotes(prev => [note, ...prev]);
  };

  const updateNote = (
    id: string,
    title: string,
    description: string,
    tags: string[]
  ) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id
          ? {
              ...note,
              title,
              description,
              tags,
              updatedAt:
                new Date().toISOString(),
            }
          : note
      )
    );
  };

  const togglePin = (
    id: string
  ) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id
          ? {
              ...note,
              pinned:
                !note.pinned,
            }
          : note
      )
    );
  };

  const archiveNote = (
    id: string
  ) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id
          ? {
              ...note,
              archived: true,
              pinned: false,
            }
          : note
      )
    );
  };

  const restoreArchive = (
    id: string
  ) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id
          ? {
              ...note,
              archived: false,
            }
          : note
      )
    );
  };

  const trashNote = (
    id: string
  ) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id
          ? {
              ...note,
              trashed: true,
              archived: false,
              pinned: false,
            }
          : note
      )
    );
  };

  const restoreTrash = (
    id: string
  ) => {
    setNotes(prev =>
      prev.map(note =>
        note.id === id
          ? {
              ...note,
              trashed: false,
            }
          : note
      )
    );
  };

  const deleteForever = (
    id: string
  ) => {
    setNotes(prev =>
      prev.filter(
        note => note.id !== id
      )
    );
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        createNote,
        updateNote,
        togglePin,
        archiveNote,
        restoreArchive,
        trashNote,
        restoreTrash,
        deleteForever,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context =
    useContext(NotesContext);

  if (!context) {
    throw new Error(
      "useNotes must be used inside NotesProvider"
    );
  }

  return context;
};