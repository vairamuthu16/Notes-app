import { useNotes } from "../context/NotesContext";

import NoteCard from "../components/NoteCard";

export default function Trash() {
  const { notes } =
    useNotes();

  const trashedNotes =
    notes.filter(
      note => note.trashed
    );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Trash Bin
      </h1>

      {trashedNotes.length ===
      0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <h2 className="text-xl font-semibold">
              Trash Is Empty
            </h2>
          </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trashedNotes.map(
            note => (
              <NoteCard
                key={note.id}
                note={note}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}