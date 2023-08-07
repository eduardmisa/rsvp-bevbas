import Image from 'next/image'

export const Fourth = () => {

  return (
      <div className="flex flex-col items-center w-screen h-screen bg-slate-100">
        <div className="flex w-full h-[70vh] lg:h-[50vh] bg-[#E7DED3] font-seasons">
          <div className="flex w-[50%] h-full p-14">
            <h2 className="block text-3xl lg:text-5xl leading-normal">Your presence at our wedding is the only present we require.</h2>
          </div>
          <div className="flex w-[50%] h-full p-14">
            <h4 className="block text-md lg:text-2xl leading-relaxed">However, if you wish to further bless our special day, monetary gift is one, we suggest.</h4>
          </div>
        </div>
        <div className="flex flex-col w-full h-[30vh] lg:h-[50vh]">
          <Image
              src="/assets/holdingHands.webp"
              width={0}
              height={0}
              sizes="100%"
              alt="Nothing"
              className="w-full h-full object-cover"
          />
        </div>
      </div>
  )
}