import { useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import './styles/index.css'
import cn from 'classnames';


function App() {
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showSpline, setShowSpline] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    setTimeout(() => {
      setShowSpline(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black overflow-hidden">
      {!isVideoEnded && (
        <video 
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay 
          playsInline 
          muted
          onEnded={handleVideoEnd}
        >
          <source src="/splash_intro_ver2.mp4" type="video/mp4" />
        </video>
      )}
      <div 
        className={cn('absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-linear', {
          'opacity-100': showSpline,
          'opacity-0 pointer-events-none': !showSpline
        })}
      >
        <Spline scene="https://prod.spline.design/9VuEpfXBPRIVzga9/scene.splinecode" />
      </div>
    </div>
  );
}

export default App;