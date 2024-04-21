import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '/src/components/Layout.jsx'
import IndexPage from './pages/IndexPage'
import ProjectSterk from './pages/Sterk'
import './App.css'

function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="/sterk" element={<ProjectSterk />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
