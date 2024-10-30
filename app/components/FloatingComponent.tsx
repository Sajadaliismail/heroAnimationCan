"use client";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

interface FloatingComponentProps {
  imageSrc: string;
  left?: number;
  top?: number;
  path?: { x: number; y: number }[];
  zIndex?: number;
  rotation: number;
  scale: number;
  width?: number;
  height?: number;
}

const FloatingComponent: React.FC<FloatingComponentProps> = ({
  imageSrc,
  left = 0,
  top = 0,
  path = [
    { x: 0, y: 0 },
    { x: 100, y: -50 },
    { x: 300, y: 0 },
  ],
  zIndex = 0,
  rotation,
  scale,
  width = 300,
  height = 300,
}) => {
  const floatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (floatRef.current) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(floatRef.current, {
        duration: 10,
        ease: "power1.inOut",
        rotate: rotation,
        motionPath: {
          path: path,
          curviness: 1.2,
        },
      });

      tl.to(
        floatRef.current,
        {
          duration: 10,
          ease: "power1.inOut",
          scale: scale,
        },
        0
      );
    }
  }, [path, rotation, scale]);

  return (
    <div
      ref={floatRef}
      className="float-element"
      style={{
        overflow: "clip",
        scrollbarWidth: "none",
        position: "absolute",
        zIndex: zIndex,
        left: `${left}%`,
        top: `${top}%`,
      }}
    >
      <Image
        src={imageSrc}
        width={width}
        height={height}
        alt="Floating Image"
      />
    </div>
  );
};

export default FloatingComponent;
