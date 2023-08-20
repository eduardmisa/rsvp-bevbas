"use client"
import useSound from 'use-sound';
import ReactFullpage from '@fullpage/react-fullpage';
import {First} from "@/app/slides/First";
import {Second} from "@/app/slides/Second";
import {Third} from "@/app/slides/Third";
import {Fourth} from "@/app/slides/Fourth";
import {Fifth} from "@/app/slides/Fifth";

export default function Home() {
  const [ play ] = useSound(
      "sounds/soundtrack.mp3",
      {
        volume: 0.75
      }
  );

  void play();

  return (
    <main className="flex flex-col min-h-screen min-w-screen max-h-screen max-w-screen">
      <ReactFullpage
          // key={"MOBILE"}
          credits={{
            enabled: true,
            position: "right"
          }}
          loopBottom
          navigation
          autoScrolling={true}
          scrollingSpeed={600}
          verticalCentered
          fitToSection
          render={() => (
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
