"use client";
import Image from "next/image";
import FloatingComponent from "./FloatingComponent";

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
  FruitImage: string;
  content: string;
  gradient: string;
}

const CarousalComponent: React.FC<CarousalProps> = ({
  floatingData,
  FruitImage,
  content,
  gradient,
}) => {
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
      <h1 className="mx-auto my-auto text-[200px] font-extrabold text-white ease-in">
        {content}
      </h1>

      <Image
        className="absolute bottom-5 right-4 z-5"
        src={`/Floating/${FruitImage}`}
        width={400}
        height={400}
        alt="apple"
      />
    </div>
  );
};

export default CarousalComponent;
