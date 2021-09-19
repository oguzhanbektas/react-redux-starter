import React from "react";
import { Container } from "reactstrap";
import Dashbord from "./Dashbord";
import Navi from "../navi/Navi";

function App() {
  return (
    <Container>
      <Navi />
      <Dashbord />
    </Container>
  );
}

export default App;
