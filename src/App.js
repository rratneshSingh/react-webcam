import './App.css';
import { WebcamCapture } from './components/Webcam/Webcam';
import { useEffect, useState } from 'react';

function App() {
  const [cameraHeight, seCameraHeight] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
      const cameraTopElement = document.querySelector('.camera-top').clientHeight;
      const cameraBottomElement = document.querySelector('.camera-top').clientHeight;
      setWindowWidth(window.innerWidth)
      seCameraHeight(window.innerHeight - (cameraTopElement + cameraBottomElement) - 1)
      // console.log(cameraTopElement);
      // console.log(cameraBottomElement);
      console.log(window)
      
  }, [])

  return (
    <div className="App">
      <div className='camera-top'></div>
      <WebcamCapture cameraHeight={cameraHeight} cameraWidth={windowWidth} />
      <div className='camera-bottom'></div>
    </div>
  );
}

export default App;
