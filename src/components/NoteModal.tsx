import type { Note } from "../types/note";

interface Props {
  note: Note;
  onClose: () => void;
}

export default function NoteModal({
  note,
  onClose,
}: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 shadow-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {note.title}
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <p className="mt-4 whitespace-pre-wrap">
          {note.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {note.tags.map(
            (tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded bg-blue-100"
              >
                #{tag}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}