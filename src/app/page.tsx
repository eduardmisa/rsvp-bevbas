"use client"
import Image from 'next/image'
import useSound from 'use-sound';
import ReactFullpage from '@fullpage/react-fullpage';
import { useRouter } from 'next/navigation';
import { getCurrentBreakpoint } from "@/app/useCurrentBreakpoint";
import { useMemo } from "react";

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

  const currentBreakpoint = useMemo(() => {
    return getCurrentBreakpoint();
  }, [])

  const mobileFullpages = [
    {
      src: "/pictures/processed/mobile/car1.jpg"
    },
    {
      src: "/pictures/processed/mobile/car2.jpg"
    },
    {
      src: "/pictures/processed/mobile/car3.jpg"
    },
    {
      src: "/pictures/processed/mobile/car4.jpg"
    },
    {
      src: "/pictures/processed/mobile/car5.jpg"
    }
  ]
  const desktopFullpages = [
    {
      src: "/pictures/processed/desktop/car1.jpg"
    },
    {
      src: "/pictures/processed/desktop/car2.jpg"
    },
    {
      src: "/pictures/processed/desktop/car3.jpg"
    },
    {
      src: "/pictures/processed/desktop/car4.jpg"
    },
    {
      src: "/pictures/processed/desktop/car5.jpg"
    }
  ]
  const isLastItem = (src: string) => {
    return src.endsWith("5.jpg")
  }

  return (
    <main className="flex flex-col min-h-screen min-w-screen max-h-screen max-w-screen">
      {currentBreakpoint === "sm" && (
          <div className="block md:hidden">
            <ReactFullpage
                key={"MOBILE"}
                navigation
                loopBottom
                render={comp =>
                    console.log("render prop change") || (
                        <ReactFullpage.Wrapper>
                          {mobileFullpages.map(({ src }) => (
                              <div key={src} className="section items-center">
                                <Image
                                    src={src}
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    alt="Nothing"
                                    className="w-screen max-h-screen"
                                />
                              </div>
                          ))}
                        </ReactFullpage.Wrapper>
                    )
                }
            />
          </div>
      )}
      {currentBreakpoint !== "sm" && (
          <div className="hidden md:block">
            <ReactFullpage
                key={"DESKTOP"}
                navigation
                loopBottom
                render={comp =>
                    console.log("render prop change") || (
                        <ReactFullpage.Wrapper>
                          {desktopFullpages.map(({ src }) => (
                              <div key={src} className="section items-center" onClick={() => isLastItem(src) ? push(rvspLink) : undefined}>
                                <Image
                                    src={src}
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    alt="Nothing"
                                    className="w-screen max-h-screen"
                                />
                              </div>
                          ))}
                        </ReactFullpage.Wrapper>
                    )
                }
            />
          </div>
      )}
    </main>
  )
}
