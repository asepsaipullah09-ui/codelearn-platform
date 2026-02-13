import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PythonLayout from "./pages/python/PythonLayout";
import PythonTopic from "./pages/python/PythonTopic";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/python" element={<PythonLayout />}>
          <Route path=":topic" element={<PythonTopic />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;