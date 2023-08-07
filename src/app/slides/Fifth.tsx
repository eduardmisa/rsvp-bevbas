import Image from 'next/image'

export const Fifth = () => {
  const rvspLink = "https://docs.google.com/forms/d/e/1FAIpQLScQrRK2RTfE0M8jE7PMrsm7e2xU_CMJ19n23B70H-7CO4CGIw/viewform?fbclid=IwAR2-NCoK8kRXWCXUhhwOJ9npmIR3EyxT_rYbu600kKbCrxoYSAbbTZK_gGg";
  return (
      <div className="flex items-center w-screen h-screen bg-[#FFFBF7]">
        <div className="flex flex-col absolute lg:relative h-full p-0 w-full lg:w-[70%] h-full bg-[src(/)]">
          <Image
              src="/pictures/AMP_0961.jpg"
              width={0}
              height={0}
              sizes="100%"
              alt="Nothing"
              className="w-full h-full object-cover hidden md:block"
          />
          <Image
              src="/pictures/AMP_0961-portrait.jpg"
              width={0}
              height={0}
              sizes="100%"
              alt="Nothing"
              className="w-full h-full object-cover object-rigth md:hidden"
          />
          <h2 className="absolute text-5xl font-seasons p-10 lg:w-[75%] leading-tight z-20">
            We hope to see you from the altar.
          </h2>
          <div className="lg:hidden absolute bg-white opacity-80 z-10 w-full h-full"></div>
        </div>
        <div className="flex flex-col absolute lg:relative w-full lg:w-[30%] p-10 mt-96 lg:mt-0 h-full font-seasons z-20">
          <h2 className="text-2xl lg:text-3xl">We kindly request your response by August 25, 2023.</h2>
          <h2 className="text-2xl lg:text-3xl">Cheers.</h2>

          <h2 className="text-2xl lg:text-3xl mt-10">
            Send a message to<br/>
            Beverly Sarza | 0909-293-9132<br/>
            Christian Bascuña | 0995-114-2292
          </h2>

          <a href={rvspLink} className="mt-10 block w-fit border-2 border-solid border-black py-2 px-10 text-lg hover:bg-black hover:text-white underline">
            RSVP NOW
          </a>
        </div>
      </div>
  )
}