import { useEffect, useRef } from 'react'

export const AppStreamCam = () => {

  const audioRef = useRef(null);

  const streamCamAudio = () => {
    var constraints = { audio: true };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        const audio = audioRef.current;

        console.log(mediaStream)
        audio.srcObject = mediaStream;
        audio.play();
        console.log("hey")
      })
      .catch(function (err) {
        console.log("what");
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }

  const getDevices = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices)
  }
  useEffect(() => {
    streamCamAudio();
    getDevices();
  }, [])

  return (
    <div style={{ "width": "1280px", "height": "720px" }}>
      <audio autoPlay={true} id="audioElement" style={{ "width": "1280px", "height": "720px" }} ref={audioRef} ></audio>
    </div>
  );
}

