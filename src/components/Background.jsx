import React from "react";

function background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen ">
        <div className="w-full pt-16 pb-10 flex justify-center text-zinc-600 text-xl font-semibold">
          Document.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default background;
