import './App.css';
import { WebcamCapture } from './components/Webcam/Webcam';
import { useEffect, useState } from 'react';

function App() {
  const [cameraHeight, seCameraHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clickedImages, setClickedImages] = useState([]);

  useEffect(() => {
      const cameraTopElement = document.querySelector('.camera-top').clientHeight;
      const cameraBottomElement = document.querySelector('.camera-top').clientHeight;
      setWindowWidth(window.innerWidth)
      seCameraHeight(window.innerHeight - (cameraTopElement + cameraBottomElement) - 1)
      console.log(window);
      setIsLoaded( true );
  }, []);

  function addImage( img ) {
    setClickedImages( [ ...clickedImages, img ] );
  }


  return (
    <div className="App">
      <div className='camera-top' style={ { display: 'flex' } }>
        { clickedImages.map( image => <img style={ { height: '40', width: '40' } } src={image} />)}
      </div>
      { isLoaded ? <WebcamCapture addImageCb={ addImage } cameraHeight={cameraHeight} cameraWidth={windowWidth}  /> : '' }
      <div className='camera-bottom'></div>
    </div>
  );
}

export default App;
