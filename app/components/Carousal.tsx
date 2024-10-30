"use client";
import { useEffect, useState } from "react";

interface CarousalProps {
  scenes: JSX.Element[];
}

const Carousal: React.FC<CarousalProps> = ({ scenes }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true); // State to manage autoplay

  const nextScene = () => {
    setCurrentScene((prev) => (prev + 1) % scenes.length);
  };

  const previousScene = () => {
    setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextScene();
        setAutoPlay(false);
      } else if (event.key === "ArrowLeft") {
        previousScene();
        setAutoPlay(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scenes.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoPlay) {
      interval = setInterval(() => {
        nextScene();
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoPlay, currentScene]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {scenes.map((scene, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentScene ? "animate-can opacity-100 " : "opacity-0"
          }`}
        >
          {scene}
        </div>
      ))}
      <button
        onClick={() => {
          previousScene();
          setAutoPlay(false);
        }}
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
      >
        &#9664;
      </button>
      <button
        onClick={() => {
          nextScene();
          setAutoPlay(false);
        }}
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousal;
