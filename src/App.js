import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Mesas from './screens/ScreenMesas/ScreenMesas';
import Produtos from './screens/ScreenProdutos/ScreenProdutos';
import Carrinho from './screens/ScreenCarrinho/ScreenCarrinho';
import Historico from './screens/ScreenHistorico/ScreenHistorico';
import Login from './screens/ScreenLogin/ScreenLogin';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mesas" element={<Mesas />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
