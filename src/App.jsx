import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '/src/components/Layout.jsx'
import IndexPage from './pages/IndexPage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<IndexPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
