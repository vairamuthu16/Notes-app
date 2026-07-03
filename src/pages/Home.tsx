import { useMemo, useState } from "react";

import { useNotes } from "../context/NotesContext";

import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";
import SearchBar from "../components/SearchBar";
import TagFilter from "../components/TagFilter";

export default function Home() {
  const { notes } = useNotes();

  const [search, setSearch] =
    useState("");

  const [selectedTag, setSelectedTag] =
    useState("");

  const activeNotes = notes.filter(
    note =>
      !note.archived &&
      !note.trashed
  );

  const tags = useMemo(() => {
    const allTags =
      activeNotes.flatMap(
        note => note.tags
      );

    return [...new Set(allTags)];
  }, [activeNotes]);

  const filteredNotes =
    activeNotes
      .filter(note => {
        const query =
          search.toLowerCase();

        return (
          note.title
            .toLowerCase()
            .includes(query) ||
          note.description
            .toLowerCase()
            .includes(query)
        );
      })
      .filter(note =>
        selectedTag
          ? note.tags.includes(
              selectedTag
            )
          : true
      )
      .sort((a, b) => {
        if (
          a.pinned === b.pinned
        )
          return 0;

        return a.pinned
          ? -1
          : 1;
      });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        My Notes
      </h1>

      <NoteForm />

      <div className="grid gap-4 md:grid-cols-2">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <TagFilter
          tags={tags}
          selectedTag={
            selectedTag
          }
          setSelectedTag={
            setSelectedTag
          }
        />
      </div>

      {filteredNotes.length ===
      0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <h2 className="text-xl font-semibold">
              No Notes Found
            </h2>

            <p className="text-gray-500 mt-2">
              Create your first note above.
            </p>
</div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredNotes.map(
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