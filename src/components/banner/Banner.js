import React from "react";
import Podcast from "./../../img/podcast-banner.png";
import LogoHeader from "../../img/logo-header.svg";
import { TbWorld } from "react-icons/tb";
import SamllLogo from "./../../img/small-logo.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="Banner__container">
      <div className="Banner_post">
        <img src={Podcast} />
      </div>
      <div className="Banner_information">
        <img src={LogoHeader}></img>
        <div className="Banner_information--option">
          <div className="information__1">
            <img src={SamllLogo}></img>
            <p>STORE</p>
          </div>
          <div className="information__2">
            <TbWorld className="icon"/>
            <p>INTERNATIONAL EDITION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
