import React from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header.jsx';
import Routers from './router/Routers.jsx';
import Footer from './component/Footer/footer.jsx';

function App() {
  const location = useLocation();
  const show = location.pathname === '/login';

  return (
      <div>
        {/* Conditionally render the Header based on the current route */}
        {!show && <Header />}
        
        {/* Render the Routers */}
        <Routers />
        
        {/* Conditionally render the Footer based on the current route */}
        {!show && <Footer />}
      </div>
  );
}

export default App;
