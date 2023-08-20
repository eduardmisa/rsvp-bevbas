"use client"
import useSound from 'use-sound';
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';
import {First} from "@/app/slides/First";
import {Second} from "@/app/slides/Second";
import {Third} from "@/app/slides/Third";
import {Fourth} from "@/app/slides/Fourth";
import {Fifth} from "@/app/slides/Fifth";
import {useEffect, useState} from "react";

export default function Home() {
  const [ play ] = useSound(
      "sounds/soundtrack.mp3",
      {
        volume: 0.75
      }
  );

  void play();

  const [isFullpageApiMounted, setIsFullpageApiMounted] = useState(false)
  const [fullpageApi, setFullpageApi] = useState<{ state: any; fullpageApi: fullpageApi} | undefined>();
  useEffect(() => {
    if (fullpageApi && !isFullpageApiMounted) {
      setInterval(() => {
        fullpageApi?.fullpageApi.moveSectionDown();
      }, 3000);
      setIsFullpageApiMounted(true)
    }
  }, [fullpageApi])

  return (
    <main className="flex flex-col min-h-screen min-w-screen max-h-screen max-w-screen">
      <ReactFullpage
          key={"MOBILE"}
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
          render={(obj) =>  {
            setFullpageApi(obj);
            return (
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
            )
          }}
      />
    </main>
  )
}
