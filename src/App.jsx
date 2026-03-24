import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import About from './pages/About';
import Horses from './pages/Horses';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Installations from './pages/Installations';
import Tarifs from './pages/Tarifs';
import Planning from './pages/Planning';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <HelmetProvider>
      <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="a-propos" element={<About />} />
          <Route path="chevaux" element={<Horses />} />
          <Route path="cours" element={<Courses />} />
          <Route path="installations" element={<Installations />} />
          <Route path="tarifs" element={<Tarifs />} />
          <Route path="planning" element={<Planning />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
