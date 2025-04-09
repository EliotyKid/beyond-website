"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { motion }  from "framer-motion"
import { barSound } from "./anim"

export default function AmbientSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [userMuted, setUserMuted] = useState(false); // controle do botão

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.2;
    audio.loop = true;

    const playAudio = () => {
      audio.play().catch(() => {
        // erro ao reproduzir (autoplay bloqueado)
      });
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.muted = true;
      } else {
        audio.muted = userMuted;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("click", playAudio, { once: true });

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("click", playAudio);
    };
  }, [userMuted]);

  const toggleMute = () => {
    const newMutedState = !userMuted;
    setUserMuted(newMutedState);
    setIsMuted(newMutedState);
    if (audioRef.current) {
      // Só desmuta se a aba estiver ativa
      if (!document.hidden) {
        audioRef.current.muted = newMutedState;
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <audio ref={audioRef} src="/sounds/ambiente.mp3" />
      <button onClick={toggleMute} className={styles.button}>
        {[0,1,2].map((i) => (
          <motion.div
          key={i}
          className={styles.bar}
          variants={barSound}
          animate={`${isMuted ? "nonAnimate ": "animate"}`}
          custom={i}
          />
        ))}
      </button>
    </div>
  );
}
