import React, { useState } from 'react';
import Webcam from "react-webcam";


const WebcamComponent = () => <Webcam />;



export const WebcamCapture = ({cameraHeight, cameraWidth}) => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    const videoConstraints = {
        width: cameraWidth,
        height: cameraHeight,
        facingMode: "user"
    };
    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
        });


    return (
        <div className="webcam-container">
            <div className="webcam-img">

                {image == '' ? <Webcam
                    audio={false}
                    height={cameraHeight}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={cameraWidth}
                    videoConstraints={videoConstraints}
                /> : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Retake Image</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Capture{cameraHeight},{cameraWidth}</button>
                }
            </div>
        </div>
    );
};
