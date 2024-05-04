import Nabvar from "@/components/Navbar"
export default function Landing() {
    return(
        <div className="w-full items-center justify-between">
            <Nabvar />

            <div className="text-center mt-20 ">
                 <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl mt-10">
                    Transform <mark className="bg-emerald-500 rounded-lg px-3">Energy</mark> Into Impact .
                 </h1>
                 <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl mt-1">
                 Empower a Sustainable Future, One Credit at a Time. Fuel the
              Change with Green Energy Credits..
                 </h1>
            </div>
            <div className="flex flex-col">
                
            <div className="mt-8 gap-3 flex justify-center ">
              <img
                className="w-full h-auto max-w-2xl rounded-lg border-2 border-neutral-700"
                src="https://www.tickertape.in/blog/wp-content/uploads/2023/03/30-Mar-2023-These-2-Mutual-Funds-Invest-only-in-Energy-Sector-47.png"
                alt="image"
              />
            </div>
            <div className="-mt-20 gap-3 w-2/4 flex justify-center">
              <img
                className="w-2/4 h-auto  rounded-lg  border-2 border-neutral-700"
                src="https://www.tickertape.in/blog/wp-content/uploads/2022/11/28-Oct-22-solar-energy-stocks-in-india_-.png"
                alt="image"
              />
            </div>
            <div className="-mt-40 ml-96 gap-3 w-2/3 flex justify-center">
              <img
                className="w-2/3 h-auto max-w-2xl rounded-lg  border-2 border-neutral-700"
                src="https://www.tickertape.in/blog/wp-content/uploads/2022/11/02-Nov-22-Green-Energy-Stocks-15.png"
                alt="image"
              />
            </div>
            
          </div>
        </div>
    )
}