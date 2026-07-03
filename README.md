# Notes Manager

A modern Notes Management Application built with React, TypeScript, TailwindCSS, and localStorage.

The application allows users to create, organize, search, archive, pin, and manage notes efficiently without requiring a backend server.

---

## Features

### Notes Management

* Create new notes
* Edit existing notes
* Delete notes
* View note details in a modal
* Persistent storage using localStorage

### Search and Filter

* Search notes by title
* Search notes by description
* Filter notes by tags

### Organization

* Pin important notes
* Archive notes
* Restore archived notes
* Move notes to trash
* Restore notes from trash
* Permanently delete notes

### User Experience

* Responsive design
* Clean card-based layout
* Modal note preview
* Fast filtering and searching
* Simple navigation using React Router

---

## Tech Stack

### Frontend

* React 19
* TypeScript
* Vite

### Styling

* TailwindCSS

### Routing

* React Router DOM

### State Management

* React Context API

### Persistence

* Browser localStorage

---

## Folder Structure

src/

├── components/

│ ├── Layout.tsx

│ ├── Navbar.tsx

│ ├── NoteCard.tsx

│ ├── NoteForm.tsx

│ ├── NoteModal.tsx

│ ├── SearchBar.tsx

│ └── TagFilter.tsx

│

├── context/

│ └── NotesContext.tsx

│

├── hooks/

│ └── useLocalStorage.ts

│

├── pages/

│ ├── Home.tsx

│ ├── Archive.tsx

│ └── Trash.tsx

│

├── types/

│ └── note.ts

│

├── App.tsx

├── main.tsx

└── index.css

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd notes-manager
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Note Object Structure

```typescript
interface Note {
  id: string;
  title: string;
  description: string;
  tags: string[];
  pinned: boolean;
  archived: boolean;
  trashed: boolean;
  createdAt: string;
  updatedAt: string;
}
```

---

## Application Workflow

### Create Note

Users can create notes by entering:

* Title
* Description
* Tags

### Search Notes

Search is performed against:

* Title
* Description

### Filter Notes

Users can filter notes using tags.

### Pin Notes

Pinned notes automatically appear at the top.

### Archive Notes

Archived notes are removed from the main notes page and displayed in Archive.

### Trash Notes

Deleted notes move to Trash where they can be:

* Restored
* Permanently removed

---

## Data Persistence

All notes are stored in browser localStorage.

Example:

```javascript
localStorage.setItem(
  "notes",
  JSON.stringify(notes)
);
```

The application restores data automatically after refresh.

---

## Future Enhancements

* Toast notifications
* Confirmation dialogs
* Import notes from JSON
* Export notes to JSON
* Note color categories
* Rich text editor
* Markdown support
* User authentication
* Cloud synchronization
* Backend integration using .NET Web API

---

## Learning Outcomes

This project demonstrates:

* React Hooks
* TypeScript
* Context API
* CRUD Operations
* State Management
* Routing
* Local Storage
* Responsive Design
* Component Architecture
* UI Development with TailwindCSS

---

## License

This project is created for learning, portfolio, interview preparation, and coding assessments.
