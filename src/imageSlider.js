import { useEffect, useState } from "react";
import {data} from './constants.js'

const ImageSlider = () => {

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const handlerPrevioustClick = () => {
    setActiveImageIndex(
      !activeImageIndex ? data.length - 1 : activeImageIndex - 1
    );

    // if(activeImageIndex==0) setActiveImageIndex(data.length-1)
    // else setActiveImageIndex(activeImageIndex -1)
  };
  const handlerNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };

  useEffect(()=>{
    const timer = setTimeout(()=>{
        handlerNextClick();
    },5000)
    return () => {
        clearTimeout(timer)
    }

  },[activeImageIndex])


  return (
    <div className="flex justify-center">
      <button className="p-4 font-bold" onClick={handlerPrevioustClick}>
        previous
      </button>
      {data.map((url,i) => (
        <img
        key={url}
          src={url}
        className={ "w-[700px] h-[500px] object-contain  " + (activeImageIndex === i ? "block" : "hidden")}
          alt="walpaper"
        />
      ))}
      {/* <img src={data[activeImageIndex]} className="w-[700px] h-[500px] object-contain " alt="walpaper" /> */}
      <button className="font-bold p-4" onClick={handlerNextClick}>
        Next
      </button>
    </div>
  );
};
export default ImageSlider;
