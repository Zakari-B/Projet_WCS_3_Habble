import { Box, Button } from "@chakra-ui/react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Box bg="pink.lighter">Welcome</Box>
      <Button variant="solid_PrimaryColor">coucou</Button>
      <Button variant="solid_SecondaryColor">coucou</Button>
      <p>coucou</p>
    </div>
  );
}

export default App;
