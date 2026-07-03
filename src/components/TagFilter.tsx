interface Props {
  tags: string[];
  selectedTag: string;
  setSelectedTag: (
    value: string
  ) => void;
}

export default function TagFilter({
  tags,
  selectedTag,
  setSelectedTag,
}: Props) {
  return (
    <select
      value={selectedTag}
      onChange={(e) =>
        setSelectedTag(
          e.target.value
        )
      }
      className="w-full rounded-lg border p-3 bg-white"
    >
      <option value="">
        All Tags
      </option>

      {tags.map((tag) => (
        <option
          key={tag}
          value={tag}
        >
          {tag}
        </option>
      ))}
    </select>
  );
}