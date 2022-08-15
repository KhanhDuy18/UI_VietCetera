import React, { useEffect, useState } from "react";
import LogoHeaderSmall from "../../img/logo-header-small.svg";
import LogoNav from "../../img/logo-nav.svg";
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import { RiUserFill } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
const Header = () => {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const [fixedMenu, setFixedMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 378) {
        setFixedMenu(true);
      } else {
        setFixedMenu(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(window.scrollY);
  // console.log(fixedMenu);

  return (
    <Navbar
      // expand="lg"
      className={fixedMenu ? "homepage__header fixed" : "homepage__header"}
    >
      <Container className="homepage__header--container">
        <Nav className="me-auto left">
          {fixedMenu && (
            <Navbar.Brand href="#home" className="Logo-website">
            <Link to="/">
              <img className="logo__img" src={LogoNav}></img>
            </Link>
            </Navbar.Brand>
          )}
          <Navbar.Brand href="#home" className="Logo-website-responsive">
            <Link to="/">
              <img className="logo__img" src={LogoNav}></img>
            </Link>
          </Navbar.Brand>
          <Nav.Item className="navItem">
            <Link to="/BlogDetail">Bài viết chi tiết</Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Link to="/BlogSite">BlogSite</Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            <Link to="/BlogSite">BlogSite</Link>
          </Nav.Item>
          <NavDropdown
            title="KHÁM PHÁ"
            id="basic-nav-dropdown"
            show={show}
            className={show ? "navDropdown showHover" : "navDropdown"}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <NavDropdown.Item className="navDropDown__item">
              <Link to="/BlogDetail">Contributors</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="navDropDown__item">
              <Link to="/BlogDetail">Video</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="navDropDown__item">
              <Link to="/BlogDetail">Hợp tác truyền thông</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="navDropDown__item">
              <Link to="/BlogDetail">Cơ hội nghề nghiệp</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="navDropDown__item">
              <Link to="/BlogDetail">Về Vietcetera</Link>
            </NavDropdown.Item>
            <NavDropdown.Item className="navDropDown__item">
              <Link to="/BlogDetail">Liên hệ</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav className="right">
          <Nav.Item className="navItem">
            {" "}
            <Link className="navIcon" to="/BlogDetail">
              {" "}
              <FaSearch />
            </Link>
          </Nav.Item>
          <Nav.Item className="navItem">
            {" "}
            <Link to="/BlogDetail">
              <Button className="nav__LoginBtn">
                <p>ĐĂNG NHẬP</p>{" "}
              </Button>
            </Link>
          </Nav.Item>
          <Nav.Item className="navItem user">
            {" "}
            <Link className="navIcon " to="/BlogDetail">
              <RiUserFill />
            </Link>
          </Nav.Item>
          <Nav.Item className="navItem moreOption">
            {" "}
            <Link className="navIcon" to="/BlogDetail">
              <GoThreeBars />
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
      <div className="navbar__menu--responsive">
        <div className="navbar__menu--header">
          <div className="header__logo"></div>
          <div className="header__button"></div>
        </div>
        <div className="navbar__menu--body">
          <div className="searchBar">
            <form>
              <input placeholder="Bạn cần tìm kiếm thông tin gì..." />
            </form>
            <Button type="submit">
              <FaSearch />
            </Button>
          </div>
          <div className="menu">
            <Nav
              className="flex-column"
              activeKey="/home"
            >
              <Nav.Item>
                <Nav.Link href="/home" disabled>Chuyên mục</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Cuộc sống</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Mười tám cộng trừ</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav
              className="flex-column"
              activeKey="/home"
            >
              <Nav.Item>
                <Nav.Link href="/home" disabled>Chuyên mục</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Cuộc sống</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Mười tám cộng trừ</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav
              className="flex-column"
              activeKey="/home"
            >
              <Nav.Item>
                <Nav.Link href="/home" disabled>Chuyên mục</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Cuộc sống</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Mười tám cộng trừ</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
