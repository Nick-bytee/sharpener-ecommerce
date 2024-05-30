import Navbar from 'react-bootstrap/Navbar';
import NavbarData from './NavbarData';

function NavBar() {
  return (
    <Navbar expand="lg" style={{backgroundColor : 'white'}}>
      <NavbarData />
    </Navbar>
  );
}

export default NavBar;