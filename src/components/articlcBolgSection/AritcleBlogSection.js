import React from "react";
import { BiBookmark } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import "./ArticleBlogSection.css";
import "./../article/Article.css";
const ArticleBlogSection = (props) => {
  return (
    <div className="Article__container ArticleBlogSection">
      <div className="Article__content">
        <div className="Article__content--img">
          <img src={props.image} alt="Hình ảnh"></img>
        </div>
        <div className="topic-title">
          {props.follow && (
            <div className="Article__content--follow">
              <p>
                 <span><AiOutlineStar/></span> {props.follow}k theo dõi
              </p>
            </div>
          )}
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
          <div className="timePost">
            <p>
              <p>{props.timePost}</p>
            </p>
          </div>
        </div>
        <div className="Article__author--button">
          <BiBookmark />
        </div>
      </div>
    </div>
  );
};

export default ArticleBlogSection;
