import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import MentionsLegales from "./pages/MentionsLegales";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/le-projet" element={<Mission />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/professionnel-handicap" element={<ProAccueil />} /> */}
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        {/* <Route path="/confidentialite" element={<Confidentialite />} /> */}
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<LoginForm />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
        {/* <Route path="/forgot-password" element={<PasswordReset />} /> */}
      </Routes>
    </div>
  );
}

export default App;
