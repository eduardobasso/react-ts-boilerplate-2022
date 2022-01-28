import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Cart from './pages/Cart'
import Catalog from './pages/Catalog'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </Router>
  )
}
