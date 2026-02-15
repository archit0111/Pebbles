import './App.css'
import Landing from './frontend/Landing'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './frontend/Login'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
