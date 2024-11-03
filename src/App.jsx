import './App.css';
import ViewProducts from './components/products/show/ViewProducts';
import CreateNew from './components/products/create/createNew';
import Admin from './pages/admin/DashboardAdmin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ViewProducts />} />
          <Route path="/nuevoproducto" element={<CreateNew />} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>  {/* Aquí se mostrarán las páginas */}
      </Router>
    </>
  );
}

export default App;
