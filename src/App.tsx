import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from '@/layouts'
import { Home } from '@/pages'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/search/:query"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
