import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Python from './pages/Python';
import Cpp from './pages/Cpp';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="/c" element={<div>C Tutorial</div>} />
        <Route path="/java" element={<div>Java Tutorial</div>} />
        <Route path="/javascript" element={<div>JavaScript Tutorial</div>} />

        <Route path="/" element={<Home />} />
        <Route path="/python" element={<Python />} />
        <Route path="/cpp" element={<Cpp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;