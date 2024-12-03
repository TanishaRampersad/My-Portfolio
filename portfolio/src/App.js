import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import Error from './components/Error';
import Layout from './components/Layout';
import Amaranth from './components/Amaranth';
import Prussian from './components/Prussian';


function App() {
  return (
    <Routes>
    <Route path="*" element={<Layout />}>
      <Route index element={<Home />} />  {/* Default route */}
      <Route path="work" element={<Work />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="amaranth" element={<Amaranth />} />
      <Route path="prussian" element={<Prussian />} />
      <Route path="*" element={<Error />} />  {/* Catch-all for unknown routes */}
    </Route>
  </Routes>
  );
}

export default App;
