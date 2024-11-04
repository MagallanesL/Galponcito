import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ViewProducts from './components/products/show/ViewProducts';
import CreateNew from './components/products/create/createNew';
import Admin from './pages/admin/DashboardAdmin';
import ProductCreated from './pages/admin/ProductsCreated/productsCreated';
import ZoneCobertura from './pages/admin/Zone/zoneCobert'
import PlaceOrders from './pages/admin/PlaceOrders/PlaceOrders';
import Reports from './pages/admin/reports/reports';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ViewProducts />} />
          <Route path="/nuevoproducto" element={<CreateNew />} />
          <Route path="/productcreated" element={<ProductCreated/>} />
          <Route path="/zona" element={<ZoneCobertura/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/placeorders" element={<PlaceOrders/>} />
          <Route path="/reports" element={<Reports/>} />
        </Routes>  {/* Aquí se mostrarán las páginas */}
      </Router>
    </>
  );
}

export default App;
