"use client"
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useRouter } from 'next/navigation';
import useSound from 'use-sound';
import {useEffect, useRef, useState} from "react";

export default function Home() {
  const rvspLink = "https://docs.google.com/forms/d/e/1FAIpQLScQrRK2RTfE0M8jE7PMrsm7e2xU_CMJ19n23B70H-7CO4CGIw/viewform?fbclid=IwAR2-NCoK8kRXWCXUhhwOJ9npmIR3EyxT_rYbu600kKbCrxoYSAbbTZK_gGg";
  const { push } = useRouter();

  const [ play, soundEnabled ] = useSound(
      "sounds/soundtrack.mp3",
      {
        volume: 0.75
      }
  );

  void play();

  return (
    <main className="flex flex-col min-h-screen min-w-screen max-h-screen max-w-screen">
      {/* LANDSCAPE */}
      <div className="min-h-screen min-w-screen max-h-screen max-w-screen flex md:hidden">
        <Carousel autoFocus autoPlay useKeyboardArrows dynamicHeight className="">
          <div>
            <Image
                src="/pictures/processed/landscape/car1.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full"
            />
          </div>
          <div>
            <Image
                src="/pictures/processed/landscape/car2.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full"
            />
          </div>
          <div>
            <Image
                src="/pictures/processed/landscape/car3.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full"
            />
          </div>
          <div>
            <Image
                src="/pictures/processed/landscape/car4.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full"
            />
          </div>
          <div className={"cursor-pointer"} onClick={() => push(rvspLink)}>
            <Image
                src="/pictures/processed/landscape/car5.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full"
            />
          </div>
        </Carousel >
      </div>

      {/* PORTRAIT */}
      <div className="min-h-screen min-w-screen max-h-screen max-w-screen hidden md:flex">
        <Carousel autoFocus autoPlay useKeyboardArrows dynamicHeight className="">
          <div>
            <Image
                src="/pictures/processed/portrait/car1.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full"
            />
          </div>
          <div>
            <Image
                src="/pictures/processed/portrait/car2.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full"
            />
          </div>
          <div>
            <Image
                src="/pictures/processed/portrait/car3.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full"
            />
          </div>
          <div>
            <Image
                src="/pictures/processed/portrait/car4.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full"
            />
          </div>
          <div className={"cursor-pointer"} onClick={() => push(rvspLink)}>
            <Image
                src="/pictures/processed/portrait/car5.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full"
            />
          </div>
        </Carousel>
      </div>
    </main>
  )
}
