import ConsultPage from "./pages/ConsultPage";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import KnowYourSkinType from "./pages/KnowYourSkinType";
import Navbar from "./components/Navbar"; // Persistent Navbar

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {/* Persistent Navbar */}
      {isAuthenticated && <Navbar />}

      <Routes>
        {/* Redirect to login if not authenticated */}
        {!isAuthenticated ? (
          <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/know-your-skin-type" element={<KnowYourSkinType />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/consult" element={<ConsultPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;

