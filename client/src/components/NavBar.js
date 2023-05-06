import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
// import {BrowserRouter as Router} from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import Login from "./Login";
// import SignUp from "./SignUp"
// import {login} from "./components/Login"

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img className='nav-logo' src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="/predict" className={activeLink === 'predict' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('predict')}>Self Diagonsis</Nav.Link>
              <Nav.Link href="/diet" className={activeLink === 'diet' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('diet')}>Diet Planner</Nav.Link>
              <Nav.Link href="/yoga" className={activeLink === 'yoga' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('yoga')}>Yoga Planner</Nav.Link>
            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>

              {/* <HashLink to="/sign-up" activeStyle>
                {/* <button className="vvd1"><span>Let’s Connect</span></button> }
              </HashLink> */}
              
              {/* <NavLink to='/signup'element={<SignUp />}>
                <button className="vvd"><span>Sign Up</span></button>
              </NavLink>
              <NavLink path='/login' element={<Login /> }>
                <button className="vvd"><span>Log In</span></button>
              </NavLink> */}
            </span>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}