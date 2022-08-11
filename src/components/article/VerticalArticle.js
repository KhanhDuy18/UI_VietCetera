import React from "react";
import { BiBookmark } from "react-icons/bi";
import "./VerticalArticle.css";
const VerticalAritcleMain = (props) => {
  return (
    <div className="VerticalArticle__container">
      <div className="VerticalArticle__content--img">
        <img src={props.image} alt="Hình ảnh"></img>
      </div>
      <div className="VerticalArticle__content--titleAndAuthor">
        <div className="topic-title">
          {props.topic && (
            <div className="VerticalArticle__content--topic">
              <p>
                <a href="#" alt="link">
                  {props.topic}
                </a>
              </p>
            </div>
          )}
          {props.title && (
            <div className="VerticalArticle__content--title">
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
        <div className="VerticalArticle__author">
          <div className="VerticalArticle__author--info">
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
    </div>
  );
};

export default VerticalAritcleMain;
