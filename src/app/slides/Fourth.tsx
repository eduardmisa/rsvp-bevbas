import Image from 'next/image'

export const Fourth = () => {

  return (
      <div className="flex flex-col items-center w-screen h-screen bg-slate-100">
        <div className="absolute flex flex-col z-20 w-full h-full font-seasons p-14">
          <h2 className="text-4xl lg:text-5xl mt-auto lg:w-[50%] leading-normal lg:leading-relaxed">Your presence at our wedding is the only present we require.</h2>
          <h4 className="text-md lg:text-2xl leading-relaxed mt-5  mb-auto">However, if you wish to further bless our special day, monetary gift is one, we suggest.</h4>
        </div>
        <div className="flex flex-col w-full h-full h-full">
          <Image
              src="/assets/holdingHands.webp"
              width={0}
              height={0}
              sizes="100%"
              alt="Nothing"
              className="w-full h-full object-cover"
          />
          <div className="absolute bg-white opacity-70 z-10 w-full h-full"></div>
        </div>
      </div>
  )
}