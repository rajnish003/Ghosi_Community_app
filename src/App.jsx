import React, { useState, useEffect, createContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Spinner from "./components/Spinner";
import MainHeader from "./components/MainHeader";
// import Aboutus from "./components/Aboutus";
import PageNotFound from "./components/PageNotFound";
import data from "./data";
import Login from "./pages/Login";
import BecomeaMember from "./pages/BecomeaMember";
import Aboutus from "./components/Aboutus";
import AboutGhosi from "./pages/Aboutghosi";
import Literature from "./pages/Literature";
import VisionMissionObjectives from "./pages/VisionMissionObejctive";

// Create context
const DataContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [cardData, setCardData] = useState(data); // Fixed initialization
  

 

  // Show Spinner on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Simulated delay

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {/* Persistent Header */}
      <MainHeader />

      <div>
        {/* Show Spinner */}
        {loading && <Spinner />}

        {/* Routes with Context Provider */}
        <DataContext.Provider value={ cardData }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/login" element={<Login />} />
            <Route path="/becomeaMemeber" element={<BecomeaMember />} />
            <Route path="/AboutGhosi" element={<AboutGhosi />} />
            <Route path="/literature" element={<Literature />} />
            <Route path="/visionmissionobjective" element={<VisionMissionObjectives />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </DataContext.Provider>
      </div>
    </div>
  );
};

export default App;
export { DataContext };
