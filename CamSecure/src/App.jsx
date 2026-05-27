import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingScreen from "./Components/Landing_Screen.jsx";
import Authentication from "./Components/auth/authentication.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
}