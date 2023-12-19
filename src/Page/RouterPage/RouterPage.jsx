import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from '../Home/Home';
const RouterPage = () => {
  return (
    <>
       <BrowserRouter>
       <Routes>
       <Route index path="/" element={<Home />} />
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default RouterPage
