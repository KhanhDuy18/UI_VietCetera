import React from "react";
import "./MainListenPodcast.css";
import { FaPlay } from "react-icons/fa";
const MainListenPodcast = (props) => {
  return (
    <div className="MainListenPodcast__container">
      <div className="MainListenPodcast__img">
        <img src={props.image} alt="Image"></img>
      </div>
      <div className="MainListenPodcast__content">
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
      <div className="MainListenPodcast__youtubeTools">
        <div className="youtubeTools__left">
          <div className="timeStart">
            <span>0:00:00</span>
          </div>
          <div className="slide">
            <div></div>
          </div>
        </div>
        <div className="youtubeTools__right">
          <div className="playButton">
            <FaPlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainListenPodcast;
