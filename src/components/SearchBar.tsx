interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="w-full rounded-lg border p-3 bg-white"
    />
  );
}