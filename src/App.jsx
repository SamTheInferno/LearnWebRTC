import { useEffect } from "react"
function App() {

  navigator.mediaDevices.getUserMedia({
    video: {
      facingMode:"",
    }})
    .then((mediaStream) => {
      const video = document.querySelector('video')
      video.srcObject = mediaStream
      // video.onloadedmetadata = () => {
      //   video.play()
      // }
    })
    .catch((err) => {
      console.log(err)
    })
  navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: false,
      noiseSuppression: false,
      autoGainControl: false
    }
  }).then((stream) => {
    const audio = document.querySelector('audio');
    audio.srcObject = stream;
    // audioStream = stream;
  }).catch(console.error);

  return (
    <>
      <video id="video" autoPlay className="w-md "></video>
      {/* <audio autoPlay></audio> */}
    </>
  )
}

export default App
