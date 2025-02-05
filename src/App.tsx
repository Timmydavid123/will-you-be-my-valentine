"use client";
import { useState } from "react";
import img1 from "./assets/1.jpeg";
import img2 from "./assets/2.jpeg";
import img3 from "./assets/3.jpeg";
import img4 from "./assets/4.jpeg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
           <div className="grid grid-cols-2 gap-2 w-[300px]">
      <img src={img1} alt="Image 1" className="w-full h-full object-cover" />
      <img src={img2} alt="Image 2" className="w-full h-full object-cover" />
      <img src={img3} alt="Image 3" className="w-full h-full object-cover" />
      <img src={img4} alt="Image 4" className="w-full h-full object-cover" />
    </div>
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!! ;</div>
        </>
      ) : (
        <>
          <img 
            className="h-[400px]"
            src={img2} alt="Image 1"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine Favour?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
