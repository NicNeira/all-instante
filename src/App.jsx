import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSection2 from "./components/herosection/HeroSection2";
import { Navbar3 } from "./components/Navbar/Navbar3";
import { MainLayout } from "./layout/MainLayout";
import { Contactos } from "./pages/Contactos";
import { Dev } from "./pages/Dev";
import { Nosotros } from "./pages/Nosotros";
import { Productos } from "./pages/Productos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainLayout />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contactos />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
