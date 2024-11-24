import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import ConsultPage from "./pages/ConsultPage";
import KnowYourSkinType from "./pages/KnowYourSkinType";

// Add to the Routes

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/know-your-skin-type" element={<KnowYourSkinType />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/consult" element={<ConsultPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
