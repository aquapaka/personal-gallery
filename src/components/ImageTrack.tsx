import {Wrapper} from "./ImageTrack.styles";
import React, {useRef, useState} from "react";

const ImageTrack = () => {
  const imageTrackRef = useRef<HTMLDivElement>(null);
  const [mouseDownPos, setMouseDownPos] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const maxDeltaX = window.innerWidth / 2;

  window.onmousedown = (e) => {
    setMouseDownPos(e.clientX);
  }

  window.onmousemove = (e) => {
    e.preventDefault();
    if(mouseDownPos === 0) return;

    // Calculate current percentage after mouse move
    const deltaX = mouseDownPos - e.clientX;
    setPercentage(Math.min(100, Math.max(0, prevPercentage + (deltaX / maxDeltaX) * 100)));

    // Animate track movement
    imageTrackRef.current!.animate({
      transform: `translate(${-percentage}%, -50%)`
    }, {duration: 1200, fill: "forwards"});

    // Animate images in track movement
    for(const image of imageTrackRef.current!.getElementsByTagName("img")) {
      image.animate({
        objectPosition: `${percentage}% center`
      }, {duration: 1200, fill: "forwards"});
    }
  }

  window.onmouseup = (e => {
    setMouseDownPos(0);
    setPrevPercentage(percentage);
  })

  return (
    <Wrapper ref={imageTrackRef} id="image-track">
      <img src="https://images.pexels.com/photos/1428277/pexels-photo-1428277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <img src="https://images.pexels.com/photos/2422970/pexels-photo-2422970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <img src="https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <img src="https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <img src="https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <img src="https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <img src="https://images.pexels.com/photos/2757549/pexels-photo-2757549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <img src="https://images.pexels.com/photos/213172/pexels-photo-213172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </Wrapper>
  )
}

export default ImageTrack;