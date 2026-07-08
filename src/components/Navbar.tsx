import { NavLink } from "react-router-dom";
import { FaStickyNote, FaArchive, FaTrash } from "react-icons/fa";
import { useNotes } from "../context/NotesContext";

export default function Navbar() {
  const { notes } = useNotes();

  const activeCount = notes.filter(
    (n) => !n.archived && !n.trashed
  ).length;

  const archiveCount = notes.filter(
    (n) => n.archived && !n.trashed
  ).length;

  const trashCount = notes.filter(
    (n) => n.trashed
  ).length;

  const navClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl transition font-medium ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="bg-white rounded-2xl shadow-md p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Notes Manager
        </h1>

        <nav className="flex flex-wrap gap-3">
          <NavLink to="/" end className={navClass}>
            <FaStickyNote />
            Notes
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
              {activeCount}
            </span>
          </NavLink>

          <NavLink
            to="/archive"
            className={navClass}
          >
            <FaArchive />
            Archive
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
              {archiveCount}
            </span>
          </NavLink>

          <NavLink
            to="/trash"
            className={navClass}
          >
            <FaTrash />
            Trash
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
              {trashCount}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}