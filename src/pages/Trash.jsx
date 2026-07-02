
import { useEffect, useState } from 'react';
import React from 'react';

export default function Trash() {
    const [notes, setNotes] = useState([]);
    useEffect(() => setNotes(JSON.parse(localStorage.getItem('notes') || '[]')), []);
    return <div>
        <h1 className='text-2xl font-bold'>Trash</h1>
        {notes.filter(n => n.trashed).map(n =>
            <div key={n.id}>{n.title}</div>)}
    </div>
}