import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import Login from './components/Login';
import Productos from './components/Productos';
import Varios from './components/Varios';
import Yo from './components/Yo';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-center">
        <Navbar.Brand>Gimnasio App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Iniciar sesión
            </Nav.Link>
            <Nav.Link as={Link} to="/productos">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/varios">
              Varios
            </Nav.Link>
            <Nav.Link as={Link} to="/yo">
              Yo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/productos">
          <Productos />
        </Route>
        <Route path="/varios">
          <Varios />
        </Route>
        <Route path="/yo">
          <Yo />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;


