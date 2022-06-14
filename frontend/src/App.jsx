import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Mission from "./pages/Mission";
import Register from "./pages/Register";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import ProAccueil from "./pages/ProAccueil";
import LoginForm from "./components/LoginForm";
import PasswordReset from "./components/PasswordReset";
import ProfilPageProfessional from "./pages/ProfilPageProfessional";
import SearchProfessionals from "./pages/SearchProfessionals";
import Contact from "./pages/Contact";
import RegisterOnboardingPro from "./pages/RegisterOnboardingPro";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/le-projet" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/le-projet" element={<Mission />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/professionnel-handicap" element={<ProAccueil />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/forgot-password" element={<PasswordReset />} />
        <Route path="/profil" element={<ProfilPageProfessional />} />
        <Route
          path="/register-onboarding-pro"
          element={<RegisterOnboardingPro />}
        />
        <Route path="/profils" element={<SearchProfessionals />} />
      </Routes>
    </div>
  );
}

export default App;
