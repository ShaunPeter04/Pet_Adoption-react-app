import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddPet from './components/AddPet'
import ViewPet from './components/ViewPet'
import SearchPet from './components/SearchPet'
import DeletePet from './components/DeletePet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddPet />} />
          <Route path='/view' element={<ViewPet />} />
          <Route path='/search' element={<SearchPet />} />
          <Route path='/delete' element={<DeletePet />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
