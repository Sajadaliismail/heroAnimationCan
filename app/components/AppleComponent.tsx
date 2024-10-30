"use client";

import CarousalComponent, { FloatingData } from "./CarousalComponent";

const Apple = () => {
  const floatingData: FloatingData[] = [
    {
      imageSrc: "/Floating/soda2.png",
      left: 0,
      top: 5,
      rotation: 20,
      path: [
        { x: 0, y: 0 },
        { x: 300, y: -20 },
        { x: 600, y: 0 },
      ],
      scale: 0.8,
      zIndex: 1,
    },
    {
      imageSrc: "/Floating/soda1.png",
      left: 40,
      top: 15,
      rotation: 20,
      path: [
        { x: 0, y: 0 },
        { x: 350, y: -15 },
        { x: 600, y: 0 },
      ],
      scale: 1.2,
    },
    {
      imageSrc: "/Floating/soda9.png",
      left: 38,
      top: 20,
      rotation: 45,
      path: [
        { x: 0, y: 0 },
        { x: 350, y: -15 },
        { x: 600, y: 0 },
      ],
      scale: 1.5,
      width: 100,
      height: 100,
    },
    {
      imageSrc: "/Floating/soda4.png",
      left: 90,
      top: 10,
      rotation: -10,
      path: [
        { x: 0, y: 0 },
        { x: -20, y: 100 },
        { x: -30, y: 400 },
      ],
      scale: 1.1,
    },
    {
      imageSrc: "/Floating/soda8.png",
      left: 60,
      top: 60,
      rotation: 30,
      path: [
        { x: 0, y: 0 },
        { x: -300, y: -25 },
        { x: -600, y: -40 },
      ],
      scale: 1.5,
      zIndex: 2,
    },
    {
      imageSrc: "/Floating/soda3.png",
      left: 10,
      top: 70,
      rotation: 45,
      path: [
        { x: 0, y: 0 },
        { x: -30, y: -250 },
        { x: -60, y: -300 },
      ],
      scale: 1.1,
    },
  ];

  return (
    <div className="inner">
      <CarousalComponent
        labelPos="-595px"
        FruitImage="soda6.png"
        canImage="/Labels.png"
        floatingData={floatingData}
        gradient=" radial-gradient(circle, #e0f2f1, #68d391, #2f855a, #22543d)"
        content="APPLE"
      />
    </div>
  );
};

export default Apple;
