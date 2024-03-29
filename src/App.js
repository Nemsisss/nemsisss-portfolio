import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
    </Routes>
  )
}

export default App
