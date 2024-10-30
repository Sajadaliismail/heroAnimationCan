"use client";
import Image from "next/image";
import FloatingComponent from "./FloatingComponent";
import { useEffect, useRef, useState } from "react";

export interface FloatingData {
  imageSrc: string;
  left: number;
  top: number;
  rotation: number;
  path: { x: number; y: number }[];
  scale: number;
  zIndex?: number;
  width?: number;
  height?: number;
}

interface CarousalProps {
  floatingData: FloatingData[];
  canImage: string;
  FruitImage: string;
  content: string;
  labelPos: string;
  gradient: string;
  prevLabel: string;
}

const CarousalComponent: React.FC<CarousalProps> = ({
  floatingData,
  FruitImage,
  canImage,
  labelPos,
  content,
  gradient,
  prevLabel,
}) => {
  const floatRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(prevLabel);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPosition(labelPos);
    }, 50);

    return () => clearTimeout(timeout);
  }, [labelPos, prevLabel]);

  return (
    <div
      className="abc w-[100vw] h-[100vh] overflow-hidden flex"
      style={{ background: gradient }}
    >
      {floatingData.map((data, index) => (
        <FloatingComponent
          key={index}
          imageSrc={data.imageSrc}
          left={data.left}
          top={data.top}
          rotation={data.rotation}
          path={data.path}
          scale={data.scale}
          zIndex={data.zIndex}
          height={data?.height}
          width={data?.width}
        />
      ))}
      <h1 className="mx-auto my-auto text-[200px] font-extrabold text-white">
        {content}
      </h1>

      <Image
        className="absolute bottom-5 right-4 z-5"
        src={`/Floating/${FruitImage}`}
        width={400}
        height={400}
        alt="apple"
      />

      <div
        ref={floatRef}
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
            backgroundImage: `url("/sodacan.png"), url("${canImage}")`,
            backgroundPosition: `0 0, ${position} 0px`,
            backgroundSize: "cover, auto 126%",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "multiply",
            width: "300px",
            aspectRatio: "3 / 5",
            maskImage: 'url("/sodacan.png")',
            maskSize: "100%",
            transition: "background-position 0.8s ",
            // animation: "",
            animation: "shake 0.6s  ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CarousalComponent;
