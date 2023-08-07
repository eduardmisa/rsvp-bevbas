import Image from 'next/image'

export const Third = () => {

  return (
      <div className="flex items-center w-screen h-screen bg-[#FFFBF7]">
        <div className="flex flex-col absolute lg:relative h-full justify-center p-0 w-full lg:w-[40%] lg:p-16 lg:pl-5 z-50 font-forum p-20">
          <h2 className="lg:hidden text-4xl text-center underline decoration-1 underline-offset-4 font-seasons p-5 w-full lg:w-60 leading-tight z-20">Bear witness to our special day</h2>
          <h2 className="text-3xl text-center">VENUE:</h2>
          <h3 className="text-center text-lg">
            The Chandelier <br/>
            #267 San Jose Ext St. <br/>
            Brgy San Isidro <br/>
            Antipolo City <br/>
            Rizal
          </h3>

          <br/>

          <h2 className="text-3xl text-center">DRESS CODE:</h2>
          <h3 className="text-center text-lg">
            <span className="block text-center underline decoration-1 underline-offset-4 mt-1">
              Principal Sponsors
            </span>
            <span className="block text-center">
              Gentlemen | Suit and Tie <br/>
              Ladies | Formal Dress <br/>
            </span>
            <span className="block text-center underline decoration-1 underline-offset-4 mt-2">
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
            <span className="flex flex-col text-center">
              Guests are encouraged to wear attire with any of these colors.
              <div className="flex gap-x-2 mx-auto mt-2">
                <span className="block w-5 h-5 bg-[#FFC0CB]"></span>
                <span className="block w-5 h-5 bg-[#BB42E9]"></span>
                <span className="block w-5 h-5 bg-[#5A86AD]"></span>
                <span className="block w-5 h-5 bg-[#0FB2B1]"></span>
                <span className="block w-5 h-5 bg-[#680404]"></span>
              </div>
            </span>
          </h3>
        </div>
        <div className="flex flex-col absolute lg:relative h-full p-0 lg:w-[60%] lg:p-16 lg:pl-5">
          <Image
              src="/pictures/AMP_0956.jpg"
              width={0}
              height={0}
              sizes="100%"
              alt="Nothing"
              className="w-full h-full object-cover"
          />
          <h2 className="hidden lg:block absolute text-2xl lg:text-left lg:text-5xl underline decoration-1 underline-offset-4 font-seasons p-5 w-full lg:w-60 leading-tight z-20">Bear witness to our special day</h2>
          <div className="lg:hidden absolute bg-white opacity-80 z-10 w-full h-full"></div>
        </div>
      </div>
  )
}