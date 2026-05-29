import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from "./Components/Landing_Screen.jsx";
import Authentication from "./Components/auth/authentication.jsx";
import WebSystem from "./Components/Web_system.jsx";
import Dots from "./Components/ui/interractiveDots.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Dots />
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/app/*" element={<WebSystem />} />
      </Routes>

    </BrowserRouter>
  );
} 