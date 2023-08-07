"use client"
import useSound from 'use-sound';
import ReactFullpage from '@fullpage/react-fullpage';
import { getCurrentBreakpoint } from "@/app/useCurrentBreakpoint";
import {useEffect, useMemo, useState} from "react";
import {First} from "@/app/slides/First";
import {Second} from "@/app/slides/Second";
import {Third} from "@/app/slides/Third";
import {Fourth} from "@/app/slides/Fourth";
import {Fifth} from "@/app/slides/Fifth";

export default function Home() {
  const [ play, soundEnabled ] = useSound(
      "sounds/soundtrack.mp3",
      {
        volume: 0.75
      }
  );

  void play();

  const [currentBreakpoint, setCurrentBreakpoint] = useState("")
  useEffect(() => {
    setCurrentBreakpoint(getCurrentBreakpoint(window));
  }, [])

  const isLastItem = (src: string) => {
    return src.endsWith("5.jpg")
  }

  return (
    <main className="flex flex-col min-h-screen min-w-screen max-h-screen max-w-screen">
      <ReactFullpage
          key={"MOBILE"}
          credits={{
            enabled: true,
            position: "right"
          }}
          navigation={false}
          autoScrolling={true}
          loopBottom
          render={comp => (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <First />
                </div>
                <div className="section">
                  <Second />
                </div>
                <div className="section">
                  <Third />
                </div>
                <div className="section">
                  <Fourth />
                </div>
                <div className="section">
                  <Fifth />
                </div>
              </ReactFullpage.Wrapper>
          )}
      />
    </main>
  )
}
