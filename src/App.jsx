import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import NamokarPlayer from './components/NamokarPlayer';

import HomePage          from './pages/HomePage';
import TemplesPage       from './pages/TemplesPage';
import TempleDetailPage  from './pages/TempleDetailPage';
import BirdsHospitalPage from './pages/BirdsHospitalPage';
import DharamshaalaPage  from './pages/DharamshaalaPage';
import LibraryPage       from './pages/LibraryPage';
import SchoolsPage       from './pages/SchoolsPage';
import DonatePage        from './pages/DonatePage';
import NotFoundPage      from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                   element={<HomePage />} />
          <Route path="/temples"            element={<TemplesPage />} />
          <Route path="/temples/:slug"      element={<TempleDetailPage />} />
          <Route path="/birds-hospital"     element={<BirdsHospitalPage />} />
          <Route path="/dharamshala"        element={<DharamshaalaPage />} />
          <Route path="/library"            element={<LibraryPage />} />
          <Route path="/schools"            element={<SchoolsPage />} />
          <Route path="/donate"             element={<DonatePage />} />
          <Route path="*"                   element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
      <NamokarPlayer />
    </BrowserRouter>
  );
}
