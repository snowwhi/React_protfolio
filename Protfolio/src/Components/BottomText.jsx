import { useRef } from "react";

function BottomText() {
  const videoRef = useRef(null);

  return (
    <div className="absolute bottom-0 w-full left-0 flex items-center justify-between p-3">
      <div>
        <h2 className="text-xl text-white font-medium ml-12">
          Website Development | DataBase Development
        </h2>
        <h3 className="text-xl text-white font-medium ml-12">
          React Kiddie
        </h3>
      </div>

      <div>
        <video
          ref={videoRef}
          className="h-12 w-12 rounded-full mr-8"
          src="https://cdnl.iconscout.com/lottie/premium/thumb/infinity-loader-animation-gif-download-4347817.mp4"
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={() => {
            videoRef.current.playbackRate = 0.8;
          }}
        />
      </div>
    </div>
  );
}

export default BottomText;
