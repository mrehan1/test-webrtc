import { useEffect, useRef } from 'react'

export const AppStreamCam = () => {

  const videoRef = useRef(null);

  const streamCamVideo = () => {
    var constraints = { video: true };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        console.log("hello")
        console.log(mediaStream);
        const video = videoRef.current;

        video.srcObject = mediaStream;
        const track = mediaStream.getTracks()[0];
        console.log(track.getSettings());
        video.play();

        console.log(video)
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
    getDevices();
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ "width": "1280px", "height": "720px" }}>
        <video autoPlay={true} id="audioElement" style={{ "width": "1280px", "height": "720px" }} ref={videoRef} src="/video.mp4" loop></video>
      </div>
      {/* <button onClick={streamCamVideo}> */}
      {/*   Play */}
      {/* </button> */}
    </div>
  );
}

