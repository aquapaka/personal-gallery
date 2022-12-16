import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 4vmin;
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%);
  
  img {
    width: 40vh;
    height: 60vh;
    object-fit: cover;
    object-position: 0% 50%;
  }
`;