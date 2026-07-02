import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Trash from './pages/Trash';
export default function App(){
return <div className='p-4'>
<nav className='flex gap-4 mb-4'>
<Link to='/'>Home</Link><Link to='/archive'>Archive</Link><Link to='/trash'>Trash</Link>
</nav>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/archive' element={<Archive/>}/>
<Route path='/trash' element={<Trash/>}/>
</Routes></div>
}
