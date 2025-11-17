import Carrito from "./components/Cart/Carrito"
import FormEjemplo from "./components/Forms/FormEjemplo"
import Forms from "./components/Forms/Forms"
import Home from "./components/Home/Home"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//nav BS
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {


  return (
    <div>

      {/*Configuracion de Rutas */}
      <BrowserRouter>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/carrito">Carrito</Link>
          <Link to="/formularios">Formularios</Link>
        </nav> */}
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Mi proyecto</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
                <Nav.Link as={Link} to="/formularios">Formularios</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div style={{width: '80%', margin:  '0 auto', marginTop: '20px'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/formularios" element={<Forms />} />
          </Routes>

        </div>
        <footer style={{position: "absolute" ,bottom:'0', textAlign:'center', width:'100%', padding:'10px 0', backgroundColor:'#f8f9fa'}}>
          <p>Mi footer &copy; 2024</p>
        </footer>
      </BrowserRouter>






    </div >
  )
}

export default App
