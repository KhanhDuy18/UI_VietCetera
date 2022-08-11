import React from "react";
import "./MainPodcast.css";
import { BiBookmark } from "react-icons/bi";

const MainPodcast = (props) => {
  return (
    <div className="MainPodcast__containner">
      <div className="MainPodcast__bg">
        <img src={props.background}></img>
        <div className="over"></div>
      </div>
      <div className="up">
        <div className="MainPodcast__content">
          <div className="topic-dateTime">
            <a href="#">{props.contentField}</a>
            {props.dateTime && (
              <div>
                <span></span>
                <p>{props.dateTime}</p>
              </div>
            )}
          </div>

          <h3>
            <a href="#">{props.contentTitle}</a>
          </h3>
        </div>
        <div className="MainPodcast__button">
          <BiBookmark />
        </div>
      </div>
    </div>
  );
};

export default MainPodcast;
