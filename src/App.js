import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AdvantagesPage from "./pages/advantages";
import MembershipPage from "./pages/membership";
import AboutPage from "./pages/about";
import TrainersPage from "./pages/trainers";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Advantages" element={<AdvantagesPage />} />
        <Route path="/Membership" element={<MembershipPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Trainers" element={<TrainersPage />} />
      </Routes>
    </div>
  );
}

export default App;
