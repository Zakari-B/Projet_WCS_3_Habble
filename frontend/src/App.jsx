import Home from "@pages/Home";
import SignupForm from "@components/SignupForm";
import LoginForm from "@components/LoginForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <LoginForm />
      <SignupForm />
    </div>
  );
}

export default App;
