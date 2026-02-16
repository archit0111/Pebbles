import './App.css'
import Landing from './frontend/Landing'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './frontend/Login'
import Signup from './frontend/Signup'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
