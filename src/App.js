import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import './style.css';
import Squard from './Squard';
import Shopping from './Shopping';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/Squard' element={<Squard/>}/>
    <Route path='/Shopping' element={<Shopping/>}/>
    </Route>
    </Routes></BrowserRouter>
  )
}

export default App