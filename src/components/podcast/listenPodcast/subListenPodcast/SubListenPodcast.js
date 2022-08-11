import React from "react";
import { FaPlay } from "react-icons/fa";
import './SubListenPodcast.css';
const SubListenPodcast = (props) => {
  return (
    <div className="SubListenPodcast__containner">
      <div className="SubListenPodcast__left">
        <div className="SubListenPodcast__img">
          <img src={props.image} alt="Image"></img>
        </div>
      </div>
      <div className="SubListenPodcast__right">
        <div className="SubListenPodcast__right--content">
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
        <div className="SubListenPodcast__right--youtubeTools">
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
    </div>
  );
};

export default SubListenPodcast;
