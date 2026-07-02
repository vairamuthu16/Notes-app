
import { useEffect, useState } from 'react';
import React from 'react';

export default function Home() {

    const [notes, setNotes] = useState([]);

    const [title, setTitle] = useState('');

    const [description, setDescription] = useState('');

    useEffect(() => { setNotes(JSON.parse(localStorage.getItem('notes') || '[]')) }, []);

    useEffect(() => localStorage.setItem('notes', JSON.stringify(notes)), [notes]);
    
    const add = () => { if (!title) return; setNotes([...notes, { id: Date.now(), title, description, archived: false, trashed: false }]); setTitle(''); setDescription(''); }
    const archive = id => setNotes(notes.map(n => n.id === id ? { ...n, archived: true } : n));
    const trash = id => setNotes(notes.map(n => n.id === id ? { ...n, trashed: true } : n));
    return <div>
        <h1 className='text-2xl font-bold mb-2'>Notes</h1>
        <input className='border p-2 mr-2' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
        <input className='border p-2 mr-2' placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} />
        <button className='border px-3 py-2' onClick={add}>Add</button>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-4'>
            {notes.filter(n => !n.archived && !n.trashed).map(n => <div key={n.id} className='border p-3'><h3>{n.title}</h3><p>{n.description}</p><button onClick={() => archive(n.id)}>Archive</button> <button onClick={() => trash(n.id)}>Trash</button></div>)}
        </div></div>
}
