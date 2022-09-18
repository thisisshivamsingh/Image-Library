import React from "react";
// import { useState } from "react";
import "./App.css";
import LazyImage from "./components";

const Images = () => {
  //   const [arr, setArr] = useState([]);
  let arr = [];
  let j = 200;
  for (let i = 0; i <= 44; i++) {
    // setArr([...arr, `https://picsum.photos/${j}`]);
    arr.push(`https://picsum.photos/${j}`);
    j++;
  }
  return (
    <div>
      {arr.map((elem, index) => (
        <LazyImage
          src={elem}
          alt="img"
          style={{
            width: "20%",
            height: "33.33%",
          }}
          key={index}
          styleClass="image"
        />
      ))}
    </div>
  );
};

export default Images;
