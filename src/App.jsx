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
        <Route path="/" element={<Home />} />
        <Route path="/python" element={<Python />} />
        <Route path="/cpp" element={<Cpp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;