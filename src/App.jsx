import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '/src/components/Layout.jsx'
import IndexPage from './pages/IndexPage'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
