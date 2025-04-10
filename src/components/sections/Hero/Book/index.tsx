"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const createTimeline = (options: {
      startSize: { width: number | string; height: number | string };
      rotateZ: number;
      perspective: number;
      boxShadowStart: string;
      rotateY: number;
      boxShadowCover: string;
      finalSize: { width: number | string; height: number | string };
    }) => {
      const {
        startSize,
        rotateZ,
        perspective,
        boxShadowStart,
        rotateY,
        boxShadowCover,
        finalSize,
      } = options;

      const tl = gsap.timeline({
        scrollTrigger: {
          // markers: true,
          trigger: cardRef.current,
          start: "center center",
          end: "+=500px top",
          scrub: true,
        },
      });

      tl.to(cardRef.current, {
        ...startSize,
        rotateZ,
        perspective,
        boxShadow: boxShadowStart,
      }, 0)
        .to(".capa", {
          rotateY,
          boxShadow: boxShadowCover,
        }, 1)
        .to(cardRef.current, {
          ...finalSize,
          rotateZ: 0,
        }, 2)
        .to(cardRef.current, {
          opacity: 0,
          duration: 0.5,
        }, 3.5)
        .to(contentRef.current, {
          backgroundColor: "rgba(255,255,255,1)",
        }, 2.5);
    };

    ScrollTrigger.matchMedia({
      // Desktop
      "(min-width: 768px)": () => {
        createTimeline({
          startSize: { width: 200, height: 300 },
          rotateZ: -10,
          perspective: 2000,
          boxShadowStart: "10px 0 20px rgba(0, 0, 0, 0.4), inset 20px 0 50px rgba(0, 0, 0, 0.4)",
          rotateY: -135,
          boxShadowCover: "10px 0 20px rgba(0, 0, 0, 0.4)",
          finalSize: { width: 2000, height: 3000 },
        });
      },

      // Mobile
      "(max-width: 767px)": () => {
        createTimeline({
          startSize: { width: 120, height: 180 },
          rotateZ: -5,
          perspective: 1000,
          boxShadowStart: "5px 0 10px rgba(0, 0, 0, 0.3), inset 10px 0 20px rgba(0, 0, 0, 0.3)",
          rotateY: -120,
          boxShadowCover: "5px 0 10px rgba(0, 0, 0, 0.3)",
          finalSize: { width: "100vw", height: "100vh" },
        });
      },
    });
  }, { scope: contentRef });

  return (
    <div ref={contentRef} className={styles.container}>
      <div ref={cardRef} className={styles.card}>
        <div className={styles.content}>
          <Image src="/Page.webp" alt="" width={100} height={150} />
        </div>
        <div className={`${styles.cover} capa`}>
          <Image src="/cover.webp" alt="" width={300} height={500} />
          <Image src="/firstcard.png" alt="" width={300} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Index;