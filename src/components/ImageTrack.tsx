import {Wrapper} from "./ImageTrack.styles";
import React, {Dispatch, SetStateAction, useRef, useState} from "react";

type Props = {
  imageUrls: string[],
  setCurrentImageNumber: Dispatch<SetStateAction<number>>;
}

const ImageTrack: React.FC<Props> = ({imageUrls, setCurrentImageNumber}) => {
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
    const percentage = Math.min(100, Math.max(0, prevPercentage + (deltaX / maxDeltaX) * 100));
    setPercentage(percentage);

    // Update page number
    setCurrentImageNumber(Math.max(Math.ceil(percentage / 100 * 8 - 0.1), 1));

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
    <Wrapper ref={imageTrackRef}>
      {imageUrls.map(imageUrl => <img src={imageUrl} alt="image"/>)}
    </Wrapper>
  )
}

export default ImageTrack;