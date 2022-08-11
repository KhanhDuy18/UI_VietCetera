import React from "react";
import { BiBookmark } from "react-icons/bi";
import "./Article.css";
const AritcleMain = (props) => {
  return (
    <div className="Article__container">
      <div className="Article__content">
        <div className="Article__content--img">
          <img src={props.image} alt="Hình ảnh"></img>
        </div>
        <div className="topic-title">
          {props.topic && (
            <div className="Article__content--topic">
              <p>
                <a href="#" alt="link">
                  {props.topic}
                </a>
              </p>
            </div>
          )}
          {props.title && (
            <div className="Article__content--title">
              <p>
                <a href="#" alt="link">
                  {props.title}
                </a>
              </p>
            </div>
          )}

          {props.desc && (
            <div className="Article__content--desc">
              <p>{props.desc}</p>
            </div>
          )}
        </div>
      </div>
      <div className="Article__author">
        <div className="Article__author--info">
          <div className="avt">
            <img src={props.avt} alt="avt"></img>
          </div>
          <div className="name--time">
            <div className="userName">
              <p>
                <a href="#">{props.userName}</a>
              </p>
            </div>
            <div className="timePost">
              <p>
                <p>{props.timePost}</p>
              </p>
            </div>
          </div>
        </div>
        <div className="Article__author--button">
          <BiBookmark />
        </div>
      </div>
    </div>
  );
};

export default AritcleMain;
