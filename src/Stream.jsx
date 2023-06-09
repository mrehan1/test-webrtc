import { useEffect, useRef } from 'react'

export const AppStreamCam = () => {

  const videoRef = useRef(null);

  const streamCamVideo = () => {
    var constraints = { video: true };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        const video = videoRef.current;

        video.srcObject = mediaStream;
        video.onloadedmetadata = () => video.play();
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }

  const getDevices = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices)
  }
  useEffect(() => {
    streamCamVideo();
    getDevices();
  }, [])

  return (
    <div style={{ "width": "1280px", "height": "720px" }}>
      <video autoPlay={true} id="audioElement" style={{ "width": "1280px", "height": "720px" }} ref={videoRef} ></video>
    </div>
  );
}

