import React, { useEffect, useState } from "react";
import LogoHeaderSmall from "../../img/logo-header-small.svg";
import Button from "react-bootstrap/Button";
import { BsChevronDown } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { RiUserFill } from "react-icons/ri";
import { GoThreeBars } from "react-icons/go";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Header.css";
const Header = () => {
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
    <div className={fixedMenu ? "homepage__header--fixed" : "homepage__header"}>
      <div className="left">
        {fixedMenu && (
          <div className="homepage__header--logo">
            <img className="logo__img" src={LogoHeaderSmall}></img>
          </div>
        )}
        <div className="homepage__header--logoReponsive">
          <img className="logo__img" src={LogoHeaderSmall}></img>
        </div>
        <div className="homepage__header-nav">
          <ul className="items">
            <li className="item">
              {" "}
              <Link to="/BlogDetail">Bài viết chi tiết</Link>
            </li>
            <li className="item">
              <Link to="/BlogSite">BlogSite</Link>
            </li>
            <li className="item">SERIES</li>
            <li className="item">
              KHÁM PHÁ <BsChevronDown className="item__icon--down" />
            </li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="homepage__header--option">
          <div className="option__search">
            <FaSearch />
          </div>
          <div className="option__button--login">
            <Button>
              <p>ĐĂNG NHẬP</p>
            </Button>
            <div className="userIcon">
              <RiUserFill />
            </div>
          </div>
          <div className="option__more">
            <GoThreeBars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
