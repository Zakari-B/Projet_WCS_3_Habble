import Home from "@pages/Home";
import SignupForm from "@components/SignupForm";
import LoginForm from "@components/LoginForm";
import PasswordReset from "@components/PasswordReset";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <LoginForm />
      <SignupForm />
      <PasswordReset />
    </div>
  );
}

export default App;
