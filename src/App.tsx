import { Wrapper, GlobalStyle } from "./App.styles"
import {useEffect, useState} from "react";

// Components
import LoadingScreen from "./components/LoadingScreen";
import ImageTrack from "./components/ImageTrack";
import ImageCounter from "./components/ImageCounter";

// Consts
const IMAGE_URLS = [
  "https://images.pexels.com/photos/1428277/pexels-photo-1428277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2422970/pexels-photo-2422970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2757549/pexels-photo-2757549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/213172/pexels-photo-213172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

function App() {
  const [loading, setLoading] = useState(true);
  const [currentImageNumber, setCurrentImageNumber] = useState(1);

  useEffect(() => {
    document.onreadystatechange = function () {
      if (document.readyState == 'complete') {
        setLoading(false);
      }
    }
  }, []);

  return (
    <Wrapper className="App">
      <GlobalStyle/>
      <LoadingScreen isLoading={loading}/>
      <ImageTrack imageUrls={IMAGE_URLS} setCurrentImageNumber={setCurrentImageNumber}/>
      <ImageCounter currentImageNumber={currentImageNumber} maxImageNumber={IMAGE_URLS.length}/>
    </Wrapper>
  )
}

export default App
