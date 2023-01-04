import styled, {keyframes} from "styled-components";

type Props = {
    isLoading: boolean,
    animationDelay: number
}

const fadeOutAnimation = keyframes`
    0% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
`;

export const Wrapper = styled.div<Props>`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: black;
  -webkit-animation: ${fadeOutAnimation} 0.3s ease-in ${props => props.animationDelay}s forwards ${props => props.isLoading ? "pause" : "running"};
  animation: ${fadeOutAnimation} 0.3s ease-in ${props => props.animationDelay}s forwards ${props => props.isLoading ? "pause" : "running"};
`;

export const LoadingIcon = styled.div`
  /**
  * Cascade
  *
  * @author jh3y - jheytompkins.com
  */
  @-webkit-keyframes cascade {
      0% {
          opacity: 0;
          -webkit-transform: translateY(-250%);
          transform: translateY(-250%); 
      }
      30%,
      60% {
          opacity: 1;
          -webkit-transform: translateY(0);
          transform: translateY(0); 
      }
      100% {
          opacity: 0;
          -webkit-transform: translateY(250%);
          transform: translateY(250%); 
      } 
  }
  
  @keyframes cascade {
      0% {
          opacity: 0;
          -webkit-transform: translateY(-250%);
          transform: translateY(-250%); 
      }
      30%,
      60% {
          opacity: 1;
          -webkit-transform: translateY(0);
          transform: translateY(0); 
      }
      100% {
          opacity: 0;
          -webkit-transform: translateY(250%);
          transform: translateY(250%); 
      }
  }

  height: 20px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-grid;
  grid-template-columns: repeat(5, 20px);
  grid-gap: 5px;
      
  div {
      background: white; 
  }
  div:nth-child(1) {
      -webkit-animation: cascade 1.5s 0.15s ease infinite backwards;
      animation: cascade 1.5s 0.15s ease infinite backwards; 
  }
  div:nth-child(2) {
      -webkit-animation: cascade 1.5s 0.3s ease infinite backwards;
      animation: cascade 1.5s 0.3s ease infinite backwards; 
  }
  div:nth-child(3) {
      -webkit-animation: cascade 1.5s 0.45s ease infinite backwards;
      animation: cascade 1.5s 0.45s ease infinite backwards; 
  }
  div:nth-child(4) {
      -webkit-animation: cascade 1.5s 0.6s ease infinite backwards;
      animation: cascade 1.5s 0.6s ease infinite backwards; 
  }
  div:nth-child(5) {
      -webkit-animation: cascade 1.5s 0.75s ease infinite backwards;
      animation: cascade 1.5s 0.75s ease infinite backwards; 
  }  
`;