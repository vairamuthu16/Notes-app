import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({
    isActive,
  }: {
    isActive: boolean;
  }) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "bg-white text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white shadow rounded-xl p-4 mb-6">
      <div className="flex gap-3 flex-wrap">
        <NavLink
          to="/"
          end
          className={linkClass}
        >
          Notes
        </NavLink>

        <NavLink
          to="/archive"
          className={linkClass}
        >
          Archive
        </NavLink>

        <NavLink
          to="/trash"
          className={linkClass}
        >
          Trash
        </NavLink>
      </div>
    </nav>
  );
}