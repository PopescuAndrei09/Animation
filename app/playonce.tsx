import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import lockIcon from './wired-lineal-298-coins.json'; 

const iconData: any = lockIcon; 

const PlayOnce = () => {
  const playerRef = useRef<Player>(null);
  
  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <Player
      ref={playerRef}
      icon={iconData} 
       size={30}
      state="morph-unlocked"
    />
  );
}

export default PlayOnce;
