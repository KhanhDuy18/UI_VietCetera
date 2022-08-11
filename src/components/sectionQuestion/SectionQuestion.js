import React from "react";
import "./SectionQuestion.css";
import { GiSmallFire } from "react-icons/gi";

const SectionQuestion = (props) => {
  return (
    <div className="SectionQuestion__container">
      <div className="SectionQuestion__col--left">
        <div className="col__left--name">
          <p>
            <span>POLL</span>
          </p>
        </div>
        {props.question && (
          <div className="col__left--question">
            <h3>{props.question}</h3>
          </div>
        )}
        <div className="col__left--voteAndThanks">
          <div className="vote">
            {props.vote ? <><span>{props.vote}</span> <p>Bình chọn</p></> : <p> Chưa có bình chọn</p>}
          </div>
          <div className="thanks">
            <p>
              Cảm ơn bạn <span><GiSmallFire /></span>
            </p>
            
          </div>
        </div>
      </div>
      <div className="SectionQuestion__col--center">

          {props.listOptions.length > 0
            ? props.listOptions.map((option) => {
                return <div><span>{option.content}</span><span>{option.value}%</span></div>;
              })
            : null}
      </div>
      <div className="SectionQuestion__col--right">
        <img src={props.image} alt="hình ảnh"></img>
      </div>
    </div>
  );
};

export default SectionQuestion;
