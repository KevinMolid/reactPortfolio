import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Layout from './components/Layout.jsx'
import IndexPage from './pages/IndexPage'
import ProjectFlashCards from './pages/FlashCards'
import ProjectSterk from './pages/Sterk'
import ProjectHabitual from './pages/Habitual'
import ProjectMcLaren from './pages/McLaren'
import ProjectLanguage from './pages/LanguageApp'

// Functions
import ScollToTop from './functions/ScrollToTop'

import './App.css'

function App() {

  return (
    <BrowserRouter>
          <ScollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="/flashcards" element={<ProjectFlashCards />} />
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
