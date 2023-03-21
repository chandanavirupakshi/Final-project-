import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link, NavLink} from 'react-router-dom';
function NavBar() {
  return (
    <>

         <Navbar key="sm" bg="secondary" expand="sm" className="" variant="light">
      <Container fluid className="mx-5"> 
      <Navbar.Brand as ={Link} to ="/" className="Navlogo">TOP JOBS</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-'sm'`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-'sm'`}
          aria-labelledby={`offcanvasNavbarLabel-expand-'sm'`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-'sm'`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav  className="justify-content-end flex-grow-1 pe-3">
              
              <NavLink className="nav-link border border-1" to="/">
                HOME
              </NavLink>
              
              <NavLink className="nav-link border border-1" to="/jobs">
                JOBS
              </NavLink>
             
              <NavLink className="nav-link border border-1" to="/contact">
                CONTACT
              </NavLink>
             
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
      
    </>
  );
}

export default NavBar;