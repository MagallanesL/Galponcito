import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home'
import CartContent from './components/cart/cartContent/cartContent';
import CreateNew from './components/products/create/createNew';
import Admin from './pages/admin/DashboardAdmin';
import ProductCreated from './pages/admin/ProductsCreated/productsCreated';
import ZoneCobertura from './pages/admin/Zone/zoneCobert'
import PlaceOrders from './pages/admin/PlaceOrders/PlaceOrders';
import Reports from './pages/admin/reports/reports';
import ViewClients from './pages/client/ViewClients';
import { CartProvider } from './context/dataContext';


function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path="/clients" element={<ViewClients />} />
          <Route path='/cart' element={<CartContent />} />
          <Route path="/newproduct" element={<CreateNew />} />
          <Route path="/productcreated" element={<ProductCreated/>} />
          <Route path="/zona" element={<ZoneCobertura/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/placeorders" element={<PlaceOrders/>} />
          <Route path="/reports" element={<Reports/>} />
        </Routes>  
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
