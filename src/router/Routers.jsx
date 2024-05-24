import React, { useContext } from 'react';
import { Routes, Route, Navigate   } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext.jsx';
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Academy from '../pages/Academy.jsx';
import Blogs from '../pages/Blogs.jsx';
import Ebooks from '../pages/Ebooks.jsx';
import Offers from '../pages/Offers.jsx';


const Routers = () => {

  return (
    <Routes>
        <Route path="/home" element={<Navigate to='/'/>}/>
        <Route path="/" element={<Home />}/>  
        <Route path="/academy" element={<Academy />}/>  
        <Route path="/blogs" element={<Blogs />}/>  
        <Route path="/ebooks" element={<Ebooks />}/>  
        <Route path="/offers" element={<Offers />}/>  
        <Route path="/login" element={<Login />}/>

        <Route path="*" element={<Navigate to='/'/>} />
    </Routes>

  )
}

export default Routers