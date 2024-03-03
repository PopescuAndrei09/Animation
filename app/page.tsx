'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


import ClaimButton from "./confetti";
import "./globals.css";
import dynamic from 'next/dynamic';

// const PlayOnce = dynamic(() => import('./playonce'), { ssr: false });

export default function Component() {
  
  return (
    <>
    <Dialog>
      <div className="flex justify-center items-center h-screen">
        <DialogTrigger asChild className="flex m-auto">
          <Button variant="outline">Daily reward</Button>
        </DialogTrigger>
      </div>
      <DialogContent className="p-4 w-[350px] h-[400px] rounded-lg">
        <DialogFooter>
          <ClaimButton />
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
   
      </>
  );
}