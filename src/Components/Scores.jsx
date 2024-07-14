import React from "react";

function Scores() {
  return (
    <div className="flex flex-row w-full items-center justify-around">
      <div className="h-full flex flex-row items-center  justify-between">
        <img src="../../img/star.png" className="h-10" alt="" />
        <div className="text-lg h-10 flex items-center justify-center text-center">
          <p>10</p>
        </div>
      </div>
      <div className="h-full flex flex-row  justify-between ">
        <div className="relative w-16 h-10">
          <img
            src="../../img/star.png"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6"
            alt="Star 1"
          />
          <img
            src="../../img/star.png"
            className="absolute bottom-0 left-0 h-6"
            alt="Star 2"
          />
          <img
            src="../../img/star.png"
            className="absolute bottom-0 right-0 h-6"
            alt="Star 3"
          />
        </div>
        <div className="text-lg h-10 flex items-center justify-center text-center">
          <p>100</p>
        </div>
      </div>
    </div>
  );
}

export default Scores;