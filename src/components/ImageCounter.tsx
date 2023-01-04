import {Wrapper} from "./ImageCounter.styles";

type Props = {
  currentImageNumber: number,
  maxImageNumber: number
}

const ImageCounter: React.FC<Props> = ({
  currentImageNumber,
  maxImageNumber
  }) => {
  return (
    <Wrapper>
      {currentImageNumber} - {maxImageNumber}
    </Wrapper>
  )
}

export default ImageCounter;