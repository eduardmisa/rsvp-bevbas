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
              <h1 className="block text-center m-auto text-3xl lg:text-7xl font-seasons tracking-[0.7rem] break-keep">CHRISTIAN <span className="block lg:inline">&</span> BEVERLY</h1>
              <h3 className="text-center m-auto text-xl lg:text-4xl font-forum mt-3">We&rsquo;re Saying &ldquo; I Do &rdquo;</h3>
            </div>
            <div className="font-forum md:hidden mt-10">
              <div className="m-auto">
                <h4 className="text-center m-auto lg:text-3xl leading-normal">September 30, 2023</h4>
                <h4 className="text-center m-auto lg:text-3xl leading-normal">at 09:30 AM</h4>
              </div>
              <div className="m-auto mt-4 md:mt-0">
                <h4 className="text-center m-auto lg:text-3xl leading-normal">Parish of the Immaculate Heart of Mary <br/>Daang Bakal Rd, Antipolo, 1870 Rizal</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute flex-col lg:flex-row z-30 w-full bg-transparent bottom-0 px-24 pb-28 gap-x-16 font-forum">
          <div className="m-auto">
            <h4 className="text-center m-auto lg:text-3xl leading-normal">September 30, 2023</h4>
            <h4 className="text-center m-auto lg:text-3xl leading-normal">at 09:30 AM</h4>
          </div>
          <div className="m-auto mt-4 md:mt-0">
            <h4 className="text-center m-auto lg:text-3xl leading-normal">Parish of the Immaculate Heart of Mary <br/>Daang Bakal Rd, Antipolo, 1870 Rizal</h4>
          </div>
        </div>
      </div>
  )
}