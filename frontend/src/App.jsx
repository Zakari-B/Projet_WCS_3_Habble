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
import Error from "./pages/Error";
import SearchProfessionals from "./pages/SearchProfessionals";
import Contact from "./pages/Contact";
import RegisterOnboardingPro from "./pages/RegisterOnboardingPro";
import WelcomeInscPro from "./pages/WelcomeInscPro";
import AnnonceForm from "./components/ProfilEmployer/Annonce/AnnonceForm";
import ProfilPageEmployer from "./pages/ProfilPageEmployer";
import AnnoncesPageEmployer from "./pages/AnnoncesPageEmployer";
import Logout from "./pages/Logout";
import ProfilPageCoordinator from "./pages/ProfilPageCoordinator";
import ProAnnonces from "./pages/ProAnnonces";
import FamilyOverview from "./pages/FamilyOverview";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/le-projet" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/professionnel-handicap" element={<ProAccueil />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<PasswordReset />} />
        <Route
          path="/profil/:freelancerId"
          element={<ProfilPageProfessional />}
        />
        <Route
          path="/profil-coordinator/:coordinatorId"
          element={<ProfilPageCoordinator />}
        />
        <Route
          path="/profil-coordinator/:coordinatorId/famille/:familyId"
          element={<FamilyOverview />}
        />
        <Route
          path="/register-onboarding-pro/:freelancerId"
          element={<RegisterOnboardingPro />}
        />
        <Route path="/profils" element={<SearchProfessionals />} />
        <Route path="/welcome-pro/:freelancerId" element={<WelcomeInscPro />} />
        <Route
          path="/deposer-une-annonce/:employerId/annonce/:annonceId"
          element={<AnnonceForm />}
        />
        <Route
          path="/profil-employer/:employerId"
          element={<ProfilPageEmployer />}
        />
        <Route
          path="/profil-employer/:employerId/mes-annonces/:id"
          element={<AnnoncesPageEmployer />}
        />
        <Route
          path="/profil/:freelancerId/mes-annonces/:id"
          element={<AnnoncesPageEmployer />}
        />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/profil/:freelancerId/mes-annonces"
          element={<ProAnnonces />}
        />
        <Route
          path="/profil-employer/:employerId/mes-annonces"
          element={<ProAnnonces />}
        />
        <Route
          path="/profil-coordinator/:coordinatorId/mes-annonces"
          element={<ProAnnonces />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
