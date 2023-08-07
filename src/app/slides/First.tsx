import Image from 'next/image'

export const First = () => {

  return (
      <div className="flex flex-col items-center w-screen h-screen">
        <Image
            src="/pictures/AMP_0208.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt="Nothing"
            className="absolute z-10 w-full h-screen object-cover"
        />
        <div className="absolute z-20 w-full h-screen bg-white opacity-75"></div>
        <div className="absolute z-30 w-full h-screen bg-transparent flex flex-col">
          <div className="m-auto">
            <div className="m-auto">
              <h1 className="text-center m-auto text-3xl md:text-7xl font-seasons tracking-[0.7rem]">CHRISTIAN & BEVERLY</h1>
              <h3 className="text-center m-auto text-xl md:text-4xl font-forum mt-3">We&lsquo;re Saying &lsquo;&lsquo; I Do &lsquo;&lsquo;</h3>
            </div>
          </div>
        </div>
        <div className="absolute flex z-30 w-full bg-transparent bottom-0 px-24 pb-28 gap-x-16 font-forum">
          <div className="ml-auto my-auto">
            <h4 className="text-center m-auto lg:text-3xl leading-normal">September 30, 2023</h4>
            <h4 className="text-center m-auto lg:text-3xl leading-normal">at 10:100 AM</h4>
          </div>
          <div className="mr-auto my-auto">
            <h4 className="text-center m-auto lg:text-3xl leading-normal">Parish of the Immaculate Heart of Mary</h4>
            <h4 className="text-center m-auto lg:text-3xl leading-normal">Daang Bakal Rd, Antipolo, 1870 Rizal</h4>
          </div>
        </div>
      </div>
  )
}