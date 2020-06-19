import React from "react";

import style from "./Overlay.module.css";

const Overlay = ({ title }) => {
  return (
    <div className={style.overlay}>
      <button>Add to favourites</button>
      <p>{title}</p>
    </div>
  );
};

export default Overlay;
