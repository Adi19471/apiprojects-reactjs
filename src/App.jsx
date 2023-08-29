import React from 'react'
import Allfood from './components/Food/Allfood'
import Movies from './components/Movies/Movies'
import Background from './components/Backgroundcolors/Background'
import Signature from './components/Signature/Signature'
import Navbar  from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
   <>

<BrowserRouter>

<Navbar />

<Routes>
  <Route path='/Allfood' element={<Allfood />}></Route>
  <Route path='/Movies' element={<Movies />}></Route>
  <Route path='/Background' element={<Background />}></Route>
  <Route path='/Signature' element={<Signature />}></Route>
</Routes>
</BrowserRouter>
 
   </>
  )
}

export default App