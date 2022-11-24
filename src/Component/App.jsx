import React from 'react'
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import '../asset/css/style.css'
export default function App() {
    return (
        <BR>
         <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BR>
    )
}
