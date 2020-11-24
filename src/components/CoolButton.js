import React from "react";

function CoolButton(props) {
    return (
      <p className="control">
        <button className={props.className} type={props.type} href="#">
          <span>{props.span}</span>
        </button>
      </p>
    );
  };

export default CoolButton;
