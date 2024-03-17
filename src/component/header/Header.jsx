import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../component/images/8.svg";
import { Nav, Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import "./header.css"
function Header() {
  const styleLogo = {
    width: "30px"
  }
  const styleButton = {
    border: "1px solid black",
    background: "none",
    color: "black",
    padding: "10px",
    borderRadius: "10px"
  }
  const styleButtonLg = {
    border: "1px solid white",
    background: "none",
    color: "white",
    padding: "10px",
    borderRadius: "10px"
  }
  const redirectToNotion = () => {
    window.location.href = 'https://www.notion.so/';
  };

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  return (
    <>
      {/* <Navbar className='fixed-top'>
        <Container>
          <Navbar.Brand className='text-white'><img style={styleLogo} src={Logo} alt='' /> $URANUS</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <button onClick={redirectToNotion} style={styleButton}>
              Built with Notion
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar className='fixed-top' expand="lg">
        <Container>
          <Navbar.Brand className='text-white'>
            <img style={styleLogo} src={Logo} alt=''/> $URANUS
          </Navbar.Brand>
          <Navbar.Toggle s onClick={toggleOffcanvas} aria-controls="offcanvasNav" />
          <div className='button'>
          <button  onClick={redirectToNotion} style={styleButtonLg}>
              Built with Notion
            </button>
            </div>
        </Container>
      </Navbar>

      <Offcanvas className="w-75" show={showOffcanvas} onHide={toggleOffcanvas} placement="start" scroll={false} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> <img style={styleLogo} src={Logo} alt=''/> $URANUS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <button onClick={redirectToNotion} style={styleButton}>
              Built with Notion
            </button>
            {/* Your offcanvas menu items here */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}

export default Header;