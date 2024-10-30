"use client";
import { useEffect, useState } from "react";

interface CarousalProps {
  scenes: JSX.Element[];
  duration?: number;
}

const Carousal: React.FC<CarousalProps> = ({ scenes, duration = 5000 }) => {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, duration);

    return () => clearInterval(interval);
  }, [scenes.length, duration]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {scenes.map((scene, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentScene ? "opacity-100" : "opacity-0"
          }`}
        >
          {scene}
        </div>
      ))}
    </div>
  );
};

export default Carousal;
