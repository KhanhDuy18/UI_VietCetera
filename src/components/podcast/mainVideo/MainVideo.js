import React from "react";
import "./MainVideo.css";
import { FaPlay } from "react-icons/fa";
const MainVideo = (props) => {
  return (
    <div className="MainVideo__containner">
      <div className="MainVideo__left">
        <div className="MainVideo__left--video">
          <img src={props.posterVideo} alt="poster"></img>
          <div className="MainVideo__left--playBtn">
            <FaPlay />
          </div>
        </div>
      </div>
      <div className="MainVideo__right">
        <div className="MainVideo__right--content">
          <h3>
            <a href="#">{props.videoTitle}</a>
          </h3>
          <div className="totalTime-like">
            <p href="#">{props.totalTime}</p>
            {props.totalTime && (
              <div>
                <span></span>
                <p>{props.toltalView}K lượt xem</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
