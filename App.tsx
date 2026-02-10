import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import WholesalePage from './pages/WholesalePage';
import NobleLabsPage from './pages/NobleLabsPage';
import NobleDispensaryPage from './pages/NobleDispensaryPage';
import HillCountryPage from './pages/HillCountryPage';
import NobleSeltzerPage from './pages/NobleSeltzerPage';
import ContactHQPage from './pages/ContactHQPage';
import EcosystemMapPage from './pages/EcosystemMapPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wholesale" element={<WholesalePage />} />
      <Route path="/noble-labs" element={<NobleLabsPage />} />
      <Route path="/noble-dispensary" element={<NobleDispensaryPage />} />
      <Route path="/hill-country" element={<HillCountryPage />} />
      <Route path="/noble-seltzer" element={<NobleSeltzerPage />} />
      <Route path="/contact-hq" element={<ContactHQPage />} />
      <Route path="/ecosystem-map" element={<EcosystemMapPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Layout>
);

export default App;
