import { useNotes } from "../context/NotesContext";

import NoteCard from "../components/NoteCard";

export default function Archive() {
  const { notes } =
    useNotes();

  const archivedNotes =
    notes.filter(
      note =>
        note.archived &&
        !note.trashed
    );

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Archive
      </h1>

      {archivedNotes.length ===
      0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <h2 className="text-xl font-semibold">
              No Archived Notes
            </h2>
          </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {archivedNotes.map(
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