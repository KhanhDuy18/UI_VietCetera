import React from 'react'
import "./SubVideo.css";
import { FaPlay } from "react-icons/fa";

const SubvVideo = (props) => {
  return (
    <div className='SubvVideo__containner'>
        <div className='SubvVideo__img'>
            <img src={props.image}></img>
            <div className="SubvVideo__img--playBtn">
            <FaPlay />
          </div>
        </div>
        <div className='SubvVideo__content'>
        <h3>
            <a href="#">{props.videoTitle} |...</a> 
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
  )
}

export default SubvVideo