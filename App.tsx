
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MiniPage from './pages/MiniPage';
import ContactPage from './pages/ContactPage';
import EcosystemExplorer from './pages/EcosystemExplorer';
import WholesalePage from './pages/WholesalePage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-hq" element={<ContactPage />} />
          <Route path="/ecosystem-map" element={<EcosystemExplorer />} />
          <Route path="/wholesale" element={<WholesalePage />} />
          <Route path="/:id" element={<MiniPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
