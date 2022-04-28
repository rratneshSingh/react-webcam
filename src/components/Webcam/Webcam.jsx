import React, { useState } from 'react';
import Webcam from "react-webcam";


const WebcamComponent = () => <Webcam />;



export const WebcamCapture = ({ addImageCb, cameraHeight, cameraWidth}) => {

    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);
    
    const capture = React.useCallback(
        () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
        addImageCb( imageSrc );
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
                    videoConstraints={{
                        width: cameraWidth,
                        height: cameraHeight,
                        facingMode: "user"
                    }}
                /> : <img src={image} />}
            </div>
            <div>
                {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn"><span className='icon-circle'></span><span>Retake Image</span>
                        </button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn"><span className='icon-circle'></span><span>Capture</span></button>
                }
            </div>
        </div>
    );
};
