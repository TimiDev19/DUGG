"use client"
import React, { useState } from 'react';

const VideoComponent = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <div>
      <video
        src="/skinny-video-final.mp4"
        poster="/images/img1.jpg"
        controls={false}
        muted={false}
        playsInline={true}
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src="path/to/your/video.mp4" type="video/mp4" />
      </video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default VideoComponent;