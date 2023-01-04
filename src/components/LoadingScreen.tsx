import React from 'react';

import {LoadingIcon, Wrapper} from "./LoadingScreen.styles";

type Props = {
    isLoading: boolean
}

const LoadingScreen: React.FC<Props> = ({isLoading}) => (
    <Wrapper isLoading={isLoading} animationDelay={2.4}>
      <LoadingIcon>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoadingIcon>
    </Wrapper>
);

export default LoadingScreen;