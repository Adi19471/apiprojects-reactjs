import React from "react";

const Background = () => {
  const BackhroundColor = (e) => {
    let body = document.querySelector("body");
    body.style.background = getBackground();
    e.target.style.backgroundColor = getBackground();
  };

  function getBackground() {
    let letter = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      <button
        onClick={BackhroundColor}
        className="btn btn-warning text-center align-items-center text-justify-content-lg-center "
      >
        Button
      </button>
    </>
  );
};

export default Background;
