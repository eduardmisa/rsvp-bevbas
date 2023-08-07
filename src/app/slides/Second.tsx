import Image from 'next/image'

export const Second = () => {

  return (
      <div className="flex flex-col items-center w-screen h-screen bg-[#E7DED3]">
        <div className="flex h-full">
          <div className="flex flex-col relative w-[50%] lg:p-16 lg:pr-5 h-full">
            <Image
                src="/pictures/AMP_0208.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full h-full object-cover"
            />
            <div className="lg:hidden absolute bg-white opacity-40 z-20 w-full h-full"></div>
          </div>
          <div className="flex flex-col relative w-[50%] lg:p-16 lg:pl-5 h-full">
            <Image
                src="/pictures/AMP_1072.jpg"
                width={0}
                height={0}
                sizes="100%"
                alt="Nothing"
                className="w-full h-full object-cover"
            />
            <div className="lg:hidden absolute bg-white opacity-40 z-20 w-full h-full"></div>
          </div>
        </div>
        <div className="absolute flex z-30 w-full bg-transparent bottom-0 top-0 lg:top-auto px-24">
          <h4 className="text-center m-auto text-8xl text-white font-seasons underline decoration-1 underline-offset-[1rem]">SAVE THE DATE</h4>
        </div>
      </div>
  )
}