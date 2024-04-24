import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { NavBar } from "./components";

function App() {

  return (
    <div className="">
      <NavBar />
      <Container className="">
        <Outlet />
      </Container>
    </div>
  )
}

export default App
