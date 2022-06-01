import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import ProAccueil from "./pages/ProAccueil";
import LoginForm from "./components/LoginForm";
import PasswordReset from "./components/PasswordReset";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/le-projet" element={<Mission />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/professionnel-handicap" element={<ProAccueil />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/forgot-password" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}

export default App;
