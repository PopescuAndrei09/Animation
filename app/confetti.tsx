
'use client'
import React, { useState, MouseEvent, useEffect, useRef } from "react";
import "./globals.css";
import confetti from "canvas-confetti";
import Image from "next/image";
import standard from "./img/Standard.png";
import advanced from "./img/Advanced.jpg";
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Player } from '@lordicon/react';
import ICON from './wired-lineal-298-coins.json';
import dynamic from 'next/dynamic';


// const iconData: any = ICON;
const PlayOnce = dynamic(() => import('./playonce'), { ssr: false });

const ConfettiButton: React.FC<{ txt: string }> = (props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    confetti({
      particleCount: 150,
      spread: 60,
    });
  };
  
  return (
    <div>
      <button onClick={handleClick}>{props.txt}</button>
    </div>
  );
};

const ClaimButton = () => {
  const [imageSrc, setImageSrc] = useState(standard);
  const [description, setDescription] = useState("Claim your daily reward");
  const [claimed, setClaimed] = useState(false);
  // const playerRef = useRef<Player>(null);

  // useEffect(() => {
  //     playerRef.current?.playFromBeginning();
  // }, []);

  const handleClaim = () => {
    if (!claimed) {
      setImageSrc(advanced);
      setDescription("You received 10 corn!");

      confetti({
        particleCount: 150,
        spread: 60,
      });

      setClaimed(true);
    }
  };

  return (
    <>
    <div className="flex flex-col items-center gap-2 p-10">
        <DialogHeader>
        <DialogTitle>Daily prize</DialogTitle>
      </DialogHeader>
      <div className="flex m-auto ">
        <Image
          className="rounded-lg"
          src={imageSrc}
          alt="background image"
          width={250}
          height={200}
        />
      </div>
      <div>
      <div className="flex m-auto">{description}</div>
      </div>
      <div className="flex flex-row items-center justify-center">
      <Button
            className="flex rounded-lg relative" 
            onClick={handleClaim}
          >
            Claim 
          <PlayOnce />
            
          </Button>
        
      </div>
      </div>
    </>
  );
};

export default ClaimButton;
