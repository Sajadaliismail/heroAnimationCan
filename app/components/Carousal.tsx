"use client";
import { useEffect, useState } from "react";

interface CarousalProps {
  scenes: { jsx: JSX.Element; CurrLabel: number }[];
}

const Carousal: React.FC<CarousalProps> = ({ scenes }) => {
  const [index, setIndex] = useState(0);
  const [prevLabel, setPrevlabel] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);
  const [position, setPosition] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  /* eslint-disable react-hooks/exhaustive-deps */

  useEffect(() => {
    setPosition(prevLabel);
    setTimeout(() => {
      setPosition(scenes[index].CurrLabel);
      setPrevlabel(scenes[index].CurrLabel);
    }, 500);
    setTimeout(() => {
      setCurrentScene(index);
    }, 800);
  }, [index]);

  const nextScene = () => {
    setIndex((prev) => (prev + 1) % scenes.length);
  };
  const previousScene = () => {
    setIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
  };
  /* eslint-disable react-hooks/exhaustive-deps */

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
  /* eslint-disable react-hooks/exhaustive-deps */

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
      {scenes[currentScene].jsx}
      <div
        // ref={floatRef}
        className="def"
        style={
          {
            position: "absolute",
            top: "30%",
            left: "45%",
          } as React.CSSProperties
        }
      >
        <div
          className={`rotating`}
          style={{
            backgroundImage: `url("/sodacan.png"), url("/Labels.png")`,
            backgroundPosition: `0 0, ${position}px 0px`,
            backgroundSize: "cover, auto 126%",
            backgroundRepeat: "repeat-x",
            backgroundBlendMode: "multiply",
            width: "300px",
            aspectRatio: "3 / 5.25",
            maskImage: 'url("/sodacan.png")',
            maskSize: "100%",
            transition:
              (index === 0 && currentScene === 2) ||
              (index === 2 && currentScene === 0)
                ? "background-position 0.3s"
                : "background-position 0.8s",
            // shaking animation when switching the last and first can
            animation:
              (index === 0 && currentScene === 2) ||
              (index === 2 && currentScene === 0)
                ? "shake 0.4s  ease-in-out"
                : "",
          }}
        ></div>
      </div>

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
