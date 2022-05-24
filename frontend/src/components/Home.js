import React from "react";
import "./style.css";

function Home(props) {
  return (
    <div className="term">
      <dt>
        <img className="circle-img" src={props.img} alt="avatar_img" />;
      </dt>
      <span>{props.name}</span>
      <dd>{props.description}</dd>
    </div>
  );
}

export default Home;
