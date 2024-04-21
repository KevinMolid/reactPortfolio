import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '/src/components/Layout.jsx'
import IndexPage from './pages/IndexPage'
import ProjectSterk from './pages/Sterk'
import ProjectHabitual from './pages/Habitual'
import ProjectMcLaren from './pages/McLaren'
import ProjectLanguage from './pages/LanguageApp'


import './App.css'

function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="/sterk" element={<ProjectSterk />} />
              <Route path="/habitual" element={<ProjectHabitual />} />
              <Route path="/mclaren" element={<ProjectMcLaren />} />
              <Route path="/languageapp" element={<ProjectLanguage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
