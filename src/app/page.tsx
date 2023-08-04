"use client"
import Image from 'next/image'

export default function Home() {
  const rvspLink = "https://docs.google.com/forms/d/e/1FAIpQLScQrRK2RTfE0M8jE7PMrsm7e2xU_CMJ19n23B70H-7CO4CGIw/viewform?fbclid=IwAR2-NCoK8kRXWCXUhhwOJ9npmIR3EyxT_rYbu600kKbCrxoYSAbbTZK_gGg";

  return (
    <main className="flex flex-col min-h-screen min-w-screen flex-col justify-between">
      <div className="fixed z-10 flex flex-col items-center w-full h-screen bg-[url('/assets/blue-transpflowers.jpg')] bg-no-repeat bg-cover md:bg-auto bg-center">
        <div className="flex w-full py-4 bg-white font-julius absolute">
          <div className="flex w-fit gap-x-6 mx-auto">
            <div className="px-4">
              <span className="block text-accent text-center font-bold decoration-1 underline underline-offset-4 mb-1">DATE & TIME</span>
              <span className="block text-darkAccent text-center text-sm font-bold">September 30, 2023</span>
              <span className="block text-darkAccent text-center text-sm font-bold">10:00 AM</span>
            </div>
          </div>
        </div>
        <div className="m-auto">
          <h1 className="text-center m-auto font-arabella text-6xl md:text-9xl text-gray-700 space-x-4">
            <span className="text-accent">Beverly</span>
            <span className="text-darkAccent text-5xl md:text-7xl">&</span>
            <span className="text-accent">Christian</span>
          </h1>
          {/*<hr/>*/}
          <h3 className="text-center font-arabella text-3xl text-darkAccent">
            We&apos;re Saying &apos;&apos;I DO&apos;&apos;
          </h3>
          <a
            href={rvspLink}
            target="_blank"
            className="flex w-fit m-auto py-2 mt-3 mb-1 px-6 rounded border border-dashed border-accent text-accent"
          >
            RSVP
          </a>
          {/*<h3 className="text-center font-lauren text-5xl text-darkAccent">*/}
          {/*  */}
          {/*</h3>*/}
        </div>
      </div>

      <div className="bg-white z-20 mt-[100vh]">
        <div className="flex flex-col items-center w-full bg-[url('/assets/lakepoint.jpg')] bg-no-repeat bg-fixed md:bg-auto">
          <div className="my-20 w-auto w-[85%] md:w-[50%] border bg-white p-6">
            <div className="p-4 border border-dashed">
              <h2 className="text-center text-accent m-auto font-arabella text-6xl my-4">
                Bear witness to our special day
              </h2>
              <Image
                  src="/pictures/AMP_0956.jpg"
                  width={0}
                  height={0}
                  sizes="100%"
                  alt="Nothing"
                  className="w-full mt-4 mb-8"
              />
              <div className="font-julius font-bold text-darkAccent">
                <span className="block text-center text-4xl font-bold mb-2">Venue</span>
                <span className="block text-center">
                The Chandelier <br/>
                #267 San Jose Ext St. <br/>
                Brgy San Isidro <br/>
                Antipolo City <br/>
                Rizal
              </span>
                <br/>
                <span className="block text-center text-2xl font-bold mb-2">
                Dress Code
              </span>
                <span className="block text-center mb-2 underline decoration-1 underline-offset-4">
                Principal Sponsors
              </span>
                <span className="block text-center">
                Gentlemen | Suit and Tie <br/>
                Ladies | Formal Dress <br/>
              </span>
                <br/>
                <span className="block text-center mb-2 underline decoration-1 underline-offset-4">
                Guests
              </span>
                <span className="block text-center">
                Gentlemen | Polo and Pants <br/>
                Ladies | Long dress, Cocktail dress, Semi formal or Dressy Casual
              </span>
                <br/>
                <span className="block text-center">
                Please avoid wearing sandos, t-shirts, shorts & slippers
              </span>
                <br/>
                <span className="block text-center">
                Guests are encourage to wear attire with any of these colors:
              </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full bg-[url('/assets/vertical-leaves.jpg')] bg-no-repeat bg-fixed bg-cover md:bg-contain">
          <div className="py-8 md:py-24 mx-auto w-[90vw] md:w-[50vw]">
            <Image
                src="/pictures/AMP_0208.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full"
            />
            <div className="bg-white px-4 py-10 text-darkAccent border">
              <h2 className="text-center text-center font-julius text-xl md:text-4xl">
                Your presence at our wedding is the only present we require.
              </h2>
              <br/>
              <h4 className="text-center text-center font-julius text-sm md:text-lg">
                However, if you wish to further bless our special day, monetary gift is one, we suggest
              </h4>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col h-fit items-center w-full">
          <div className="absolute right-0">
            <Image
                src="/pictures/AMP_0961.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full"
            />
          </div>
          <div className="absolute left-0 w-[60vw] mt-12">
            <h2 className="ml-10 text-center m-auto font-arabella text-6xl md:text-9xl text-gray-700">
              <span className="text-darkAccent">Hope to see you from the altar</span>
            </h2>
          </div>
        </div>
      </div>
    </main>
  )
}
