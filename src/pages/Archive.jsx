
import { useEffect, useState } from 'react';
import React from 'react';
export default function Archive() {
    const [notes, setNotes] = useState([]);
    useEffect(() => setNotes(JSON.parse(localStorage.getItem('notes') || '[]')), []);

    return <div>
        <h1 className='text-2xl font-bold'>Archive</h1>
        {notes.filter(n => n.archived && !n.trashed).map(n => <div key={n.id}
        >{n.title}</div>)}
    </div>
}