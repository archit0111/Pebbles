import './App.css'
import Landing from './frontend/Landing'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './frontend/Login'
import Signup from './frontend/Signup'
import Dasboard from './frontend/Dashboard'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/dashboard' element={<Dasboard/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
