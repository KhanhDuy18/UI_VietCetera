import React from "react";
import "./Footer.css";
import { Button } from "react-bootstrap";
import LogoFooter from "./../../img/logo-footer.svg";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";
import AppStore from "./../../img/app-store.png";
import ChPlay from "./../../img/gg-play.png";
import QR from "./../../img/qr-down-app.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="Footer__container">
      <div className="Footer__LogoAndSocialMedia">
        <div className="LogoAndSocalMedia__logo">
          <img src={LogoFooter}></img>
          <p>Góc nhìn đa chiều về Việt Nam hiện đại.</p>
        </div>
        <div className="LogoAndSocalMedia__socialMedia">
          <div className="iconMedia">
            <TiSocialFacebook />
          </div>
          <div className="iconMedia">
            <AiFillInstagram />
          </div>
          <div className="iconMedia">
            <TiSocialLinkedin />
          </div>
          <div className="iconMedia">
            <AiFillYoutube />
          </div>
        </div>
      </div>
      <div className="Footer__content">
        <div className="Footer__content--left">
          <div className="title">
            <p>
              <span>5 tin tức </span>bạn cần biết mỗi tuần
            </p>
          </div>
          <div className="desc">
            <p>
              Mỗi thứ Tư, bạn sẽ nhận được email tổng hợp những tin tức nổi bật
              tuần qua một cách súc tích, dễ hiểu, và hoàn toàn miễn phí!
            </p>
          </div>
          <div className="section6__footer--form">
            <form>
              <div className="formInpunt">
                {/* <GrMail/> */}
                <input placeholder="Nhập địa chỉ email của bạn" />
              </div>
              <Button type="submit">
                <span>ĐĂNG KÝ!</span>
              </Button>
            </form>
          </div>
          <div className="heading">
            <p>TẢI ỨNG DỤNG CỦA CHÚNG TÔI</p>
          </div>
          <div className="applications">
            <div className="applications__left">
              <img src={AppStore}></img>
              <img src={ChPlay}></img>
            </div>
            <div className="applications__right">
              <img src={QR}></img>
            </div>
          </div>
        </div>
        <div className="Footer__content--right">
          <div className="content__right-item">
            <p className="heading">CHUYÊN MỤC</p>
            <a href="#">Cuộc Sống</a>
          </div>
          <div className="content__right-item">
            <p className="heading">CÁC SỰ KIỆN</p>
            <a href="#">
              <span>Cởi Mở Đi Unitour</span>
            </a>
            <a href="#">
              <span>Flavors Vietnam 2022</span>
            </a>
            <a href="#">
              <span>Ậm Ừ Talk</span>
            </a>
            <a href="#">
              <span>VNI Summit</span>
            </a>
          </div>
          <div className="content__right-item">
            <p className="heading">VỀ CHÚNG TÔI</p>
            <a href="#">
              <span>Hợp Tác Truyền Thông</span>
            </a>
            <a href="#">
              <span>Cơ Hội Nghề Nghiệp</span>
            </a>
            <a href="#">
              <span>Về Vietcetera</span>
            </a>
            <a href="#">
              <span>Liên Hệ</span>
            </a>
          </div>
          <div className="content__right-item">
            <p className="heading">KHÁM PHÁ</p>
            <a href="#">
              <span>Podcast</span>
            </a>
            <a href="#">
              <span>Series</span>
            </a>
            <a href="#">
              <span>Contributors</span>
            </a>
            <a href="#">
              <span>Video</span>
            </a>
          </div>
        </div>
      </div>
      <div className="Footer__contact">
        <Row gap={0}>
          <Col>
            <p className="Footer__contact--heading">CÔNG TY TNHH VIETCETERA</p>
          </Col>
        </Row>
        <Row>
          <div className="row1">
            <div>
              <p>
                <span>Mã số thuế: </span> 0314912825
              </p>
            </div>
            <div>
              <p>
                <span>Địa chỉ ĐKKD: </span> 6 Thi Sách, Phường Bến Nghé, Quận 1,
                TP. Hồ Chí Minh, Việt Nam
              </p>
            </div>
            <div>
              <p>Giấy phép thiết lập MXH số 69/GP-BTTTT, ký ngày 29/01/2021</p>
            </div>
          </div>
        </Row>
        <Row>
          <div className="row2">
            <div>
              <p>
                <span>Điện thoại: </span> 0286 286 2989
              </p>
            </div>
            <div>
              <p>
                <span>Email: </span> team@vietcetera.com
              </p>
            </div>
            <div>
              <p>Chịu trách nhiệm quản lý nội dung: Phan Nguyên Lập</p>
            </div>
          </div>
        </Row>
        <Row>
          <div className="row3">
            <div>
              <p> © Vietcetera 2022 . All Rights Reserved.</p>
            </div>
            <div>
              <p>Chính Sách Bảo Mật</p>
            </div>
            <div>
              <p>Thỏa Thuận Người Dùng</p>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
