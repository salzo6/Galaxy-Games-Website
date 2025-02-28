import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AIAutomation from './pages/AIAutomation';
import MobileApps from './pages/MobileApps';
import WebDevelopment from './pages/WebDevelopment';
import About from './pages/About';
import SpaceBlastSupport from './pages/SpaceBlastSupport';
import SpaceBlastPrivacy from './pages/SpaceBlastPrivacy';

function ScrollToTop() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-automation" element={<AIAutomation />} />
            <Route path="/mobile-apps" element={<MobileApps />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/about" element={<About />} />
            <Route path="/spaceblast/support" element={<SpaceBlastSupport />} />
            <Route path="/spaceblast/privacy" element={<SpaceBlastPrivacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;