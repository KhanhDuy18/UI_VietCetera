import React from 'react'
import { Button } from "react-bootstrap";
import "./LoginFormHomePage.css"
const LoginFormHomePage = (props) => {
  return (
    <div className="homepage__section6--footer">
    <div className="section6--footer__left">
      <div className="section6__footer--img">
        <img src={props.img}></img>
      </div>
    </div>
    <div className="section6--footer__right">
      <div className="section6__footer--content">
        <div className="title">
          <p>
            <span>5 tin tức </span>bạn cần biết mỗi tuần
          </p>
        </div>
        <div className="desc">
          <p>
            5 tin tức bạn cần biết mỗi tuần Mỗi thứ Tư, bạn sẽ nhận được
            email tổng hợp những tin tức nổi bật tuần qua một cách súc
            tích, dễ hiểu, và hoàn toàn miễn phí!
          </p>
        </div>
      </div>
      <div className="section6__footer--form">
        <form>
          <div className="formInpunt">
            <input placeholder="Nhập địa chỉ email của bạn" />
          </div>
          <Button type="submit">
            <span>ĐĂNG KÝ!</span>
          </Button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default LoginFormHomePage