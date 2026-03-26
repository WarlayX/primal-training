import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Reserve from './pages/Reserve';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </MainLayout >
    </BrowserRouter>
  );
}