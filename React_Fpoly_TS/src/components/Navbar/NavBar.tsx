import { useState } from 'react';
import './Navbar.scss';
import {
  Nav,
  Navbar,
  Container,
  Col,
  Row,
  Form,
  Button,
  Offcanvas,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import FptLogo from '../../assets/img/fpt-logo.png';

const NavBar = () => {
  const navigate = useNavigate();

  const handleOnChange = () => {};

  const handleSearchQuery = () => {};

  return (
    <Navbar bg="light" expand="lg" className="px-2 shadow-sm fixed-top">
      <Container fluid>
        <Row className="block py-3 justify-content-end align-items-center">
          <Col xs={5} lg={4}>
            <Navbar.Brand>
              <Link to="/">
                <img src={FptLogo} alt="FPT logo" className="w-50" />
              </Link>
            </Navbar.Brand>
          </Col>
          <Col lg={4} className="d-none d-lg-flex">
            <div className="search-input w-100">
              <Form.Control
                type="text"
                size="lg"
                placeholder=""
                aria-describedby=""
                onChange={handleOnChange}
                onKeyUp={handleSearchQuery}
                value={''}
              />
              <i
                className="fa-solid fa-magnifying-glass"
                onClick={handleSearchQuery}
              ></i>
            </div>
          </Col>
          <Col xs={7} lg={4}>
            <div className="shopping-cart d-flex gap-3 justify-content-end align-items-center">
              <Button variant="outline-secondary d-none d-lg-flex">
                <span className="w-100">Sign in</span>
              </Button>
              <span className="fs-4 d-lg-none">
                <i className="fa-solid fa-circle-user"></i>
              </span>
              <Link to="/cart">
                <div className="cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <div className="quantity">
                    <span>{}</span>
                  </div>
                </div>
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center">
          <Col xs={1} lg={12}>
            <Navbar.Toggle aria-controls={`navbar-lg`} className="ps-0" />
            <Navbar.Offcanvas
              id={`navbar-lg`}
              aria-labelledby={`navbar-lg`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <img
                  src="https://images-production.bookshop.org/spree/curators/avatars/10/thumb/Social_media_Icon_alternative.jpg?1573251482"
                  alt="logo"
                  className="logo"
                />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 gap-5">
                  <Link to="/Lab4" className="nav-link nav-link-hover">
                    Lab 4
                  </Link>
                  <Link to="/Lab5" className="nav-link nav-link-hover">
                    Lab 5
                  </Link>
                  <Link to="/" className="nav-link nav-link-hover">
                    Lab 6
                  </Link>
                  {/* <div className="nav-item show dropdown">
                    <Link
                      to="categories/fiction"
                      id="offcanvasNavbarDropdown-expand-lg"
                      aria-expanded="true"
                      role="button"
                      className="dropdown-toggle nav-link nav-link-hover "
                    >
                      Fiction
                    </Link>
                    <div
                      aria-labelledby="offcanvasNavbarDropdown-expand-lg"
                      data-bs-popper="static"
                      className="dropdown-menu show"
                    >
                      <div className="d-sm-flex align-items-center justify-content-center">
                        <div className="links">
                          <Link
                            to="categories/fiction/romance"
                            className="nav-link"
                          >
                            Romance
                          </Link>
                          <Link
                            to="categories/fiction/comics-graphic-novels"
                            className="nav-link"
                          >
                            Comics & Graphic Novels
                          </Link>
                          <Link
                            to="categories/fiction/horror"
                            className="nav-link"
                          >
                            Horror
                          </Link>
                        </div>
                        <div className="links">
                          <Link
                            to="categories/fiction/fantasy"
                            className="nav-link"
                          >
                            Fantasy
                          </Link>
                          <Link
                            to="categories/fiction/manga"
                            className="nav-link"
                          >
                            Manga
                          </Link>
                          <Link
                            to="categories/fiction/historical-fiction"
                            className="nav-link"
                          >
                            Historical Fiction
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="nav-item show dropdown">
                    <Link
                      to="/fiction"
                      id="offcanvasNavbarDropdown-expand-lg"
                      aria-expanded="true"
                      role="button"
                      className="dropdown-toggle nav-link nav-link-hover "
                    >
                      Nonfiction
                    </Link>
                    <div
                      aria-labelledby="offcanvasNavbarDropdown-expand-lg"
                      data-bs-popper="static"
                      className="dropdown-menu show"
                    >
                      <div className="d-sm-flex align-items-center justify-content-center w-100">
                        <div className="links">
                          <Link to="/" className="nav-link">
                            Travel
                          </Link>
                          <Link to="/" className="nav-link">
                            Arts & Photography
                          </Link>
                          <Link to="/" className="nav-link">
                            Business & Investing
                          </Link>
                        </div>
                        <div className="links">
                          <Link to="/" className="nav-link">
                            Cooking & Wine
                          </Link>
                          <Link to="/" className="nav-link">
                            History
                          </Link>
                          <Link to="/" className="nav-link">
                            Science & Technology
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <Link to="/" className="nav-link nav-link-hover">
                    Lab 7
                  </Link>
                  <Link to="/" className="nav-link nav-link-hover">
                    Lab 8
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Col>
          <Col xs={11} className="d-flex d-lg-none p-0">
            <div className="search-input w-100">
              <Form.Control
                type="text"
                id="search"
                size="lg"
                placeholder="Search books,authors"
                aria-describedby="Search books,authors"
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
