"use client"
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen flex-col justify-between">
      <div className="flex fixed w-full py-6 bg-white font-julius hidden">
        <div className="flex gap-x-6 mx-auto">
          <div className="px-4">
            <span className="block text-[#2b5643] text-center font-bold decoration-1 underline underline-offset-4">DATE & TIME</span>
            <span className="block text-[#90cbc9] text-center text-sm">September 30, 2023</span>
            <span className="block text-[#90cbc9] text-center text-sm">10:00 AM</span>
          </div>
          <div className="px-4">
            <span className="block text-[#2b5643] text-center font-bold decoration-1 underline underline-offset-4">LOCATION</span>
            <span className="block text-[#90cbc9] text-center text-sm">Parish of the Immaculate Heart of Mary</span>
            <span className="block text-[#90cbc9] text-center text-sm">Daang Bakal Rd, Antipolo Rizal</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-screen h-screen bg-[url('/assets/eucalyptus.jpg')] bg-no-repeat bg-cover md:bg-contain bg-center ">
        <div className="m-auto">
          <h1 className="text-center m-auto font-arabella text-7xl text-gray-700 space-x-4">
            <span className="text-[#2b5643]">Beverly</span>
            <span className="text-[rgb(111,177,175)] text-5xl">&</span>
            <span className="text-[#2b5643]">Christian</span>
          </h1>
          <hr/>
          <h3 className="text-center font-arabella text-4xl text-[#90cbc9]">
            We're Saying "I DO"
          </h3>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScQrRK2RTfE0M8jE7PMrsm7e2xU_CMJ19n23B70H-7CO4CGIw/viewform?fbclid=IwAR2-NCoK8kRXWCXUhhwOJ9npmIR3EyxT_rYbu600kKbCrxoYSAbbTZK_gGg"
            target="_blank"
            className="flex w-fit m-auto py-2 mt-3 mb-1 px-6 rounded border border-dashed border-[rgb(111,177,175)] text-[rgb(111,177,175)]"
          >
            RSVP
          </a>
          {/*<h3 className="text-center font-lauren text-5xl text-[#90cbc9]">*/}
          {/*  */}
          {/*</h3>*/}
        </div>
      </div>

      <div className="flex flex-col items-center w-screen bg-[url('/assets/plantsflowers-top.jpg')] bg-no-repeat bg-contain md:bg-contain">
        <div className="mt-10 w-auto w-[90vw] md:w-[50vw] border bg-white p-6">
          <div className="p-4 border border-dashed">
            <h2 className="text-center m-auto font-arabella text-6xl text-gray-700 my-4">
              <span className="text-[#2b5643]">Bear witness to our special day</span>
            </h2>
            <Image
                src="/pictures/AMP_0956.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full mt-4 mb-8"
            />
            <div className="font-julius font-bold text-[#2b5643]">
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

      <div className="flex flex-col min-h-screen items-center w-screen bg-[url('/assets/vertical-leaves.jpg')] bg-no-repeat bg-contain md:bg-contain md:mt-32">
        <div className="my-auto ml-auto mr-[7vw] w-[60vw]">
          <Image
              src="/pictures/AMP_0208.jpg"
              width={0}
              height={0}
              sizes="100%"
              alt="Nothing"
              className="w-full mt-4 mb-8"
          />

          <h2 className="text-center text-center font-julius text-4xl text-[#2b5643] my-4">
            Your presence at our wedding is the only preset we require.
          </h2>
          <h4 className="text-center text-center font-julius text-sm md:text-lg text-[#2b5643] my-4">
            However, if you wish to further bless our special day, monetary gift is one, we suggest
          </h4>
        </div>
      </div>

      <div className="relative flex flex-col h-fit items-center w-screen md:mt-32">
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
        <div className="absolute left-0 w-[60vw] mt-28">
          <h2 className="ml-10 text-center m-auto font-arabella text-6xl md:text-9xl text-gray-700">
            <span className="text-[#2b5643]">Hope to see you from the altar</span>
          </h2>
        </div>
      </div>








      {/*<div className="m-auto space-y-2">*/}
      {/*  <Image*/}
      {/*      src="/pictures/AMP_0208.jpg"*/}
      {/*      width={500}*/}
      {/*      height={500}*/}
      {/*      alt="Nothing"*/}
      {/*  />*/}
      {/*  <Image*/}
      {/*      src="/pictures/AMP_0956.jpg"*/}
      {/*      width={500}*/}
      {/*      height={500}*/}
      {/*      alt="Nothing"*/}
      {/*  />*/}
      {/*  <Image*/}
      {/*      src="/pictures/AMP_0961.jpg"*/}
      {/*      width={500}*/}
      {/*      height={500}*/}
      {/*      alt="Nothing"*/}
      {/*  />*/}
      {/*  <Image*/}
      {/*      src="/pictures/AMP_0985.jpg"*/}
      {/*      width={500}*/}
      {/*      height={500}*/}
      {/*      alt="Nothing"*/}
      {/*  />*/}
      {/*  <Image*/}
      {/*      src="/pictures/AMP_1072.jpg"*/}
      {/*      width={500}*/}
      {/*      height={500}*/}
      {/*      alt="Nothing"*/}
      {/*  />*/}
      {/*</div>*/}
    </main>
  )
}
