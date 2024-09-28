import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const containerRef = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, sint.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-green-600",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, sint.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-green-600",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, sint.",
      fileSize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-blue-600",
      },
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} containerRef={containerRef} />
      ))}
    </div>
  );
}

export default Foreground;
