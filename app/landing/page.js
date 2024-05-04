import Nabvar from "@/components/Navbar"
import Footer from "@/components/Footer"
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
          
          <div class="relative h-20">
            <div class="absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" class="w-screen h-20">
                    <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    class="text-gray-600"
                    d="M0,10 C10,5 20,20 30,10 C40,0 50,20 60,10 C70,0 80,20 90,10 C95,5 100,10 100,10"
                    ></path>
                </svg>
            </div>
          </div>   

          <h1 className=" text-5xl font-extrabold tracking-tight lg:text-6xl mt-10 text-center">
                    Generate Revenue With Harmony .
                 </h1>
          <h1 className=" text-5xl font-extrabold font-serif tracking-tight lg:text-2xl mt-1 text-center">
                    Leveraging the power of Lisk 🩵.
                 </h1>
          <div className="flex flex-row gap-8 mx-32 mt-10">
          
            {/* card component */}
            <div class="max-w-sm  bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg  " src="https://www.circuitbasics.com/wp-content/uploads/2020/06/Motion-Detector-Wiring-Diagram-with-5-Volt-Relay-2-BEST.png" alt="" />
            </a>
            <div class="p-5">
            <a href="#">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GenSensor Technology</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Consumer demand driven 
      by the opportunity to earn  
      passively can be leveraged
      to generate revenue per 
      integraion 

.</p>
           
            </div>
            </div>

            <div class="max-w-sm bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg " src="https://somethingaboutmarketing.com/wp-content/uploads/2019/09/how-to-sell-something-about-marketing.jpg" alt="" />
            </a>
            <div class="p-5">
            <a href="#">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Selling feature</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Selling of Tokens that represent renewable energy generation, fostering a transparent and active market..</p> 
            </div>
            </div>

            <div class="max-w-sm bg-white border-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="https://static.vecteezy.com/system/resources/previews/011/219/159/original/icon-for-button-buying-something-or-buy-for-trading-free-vector.jpg" alt="" />
            </a>
            <div class="p-5">
            <a href="#">
                 <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Buying feature</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">buying Tokens that represent renewable energy generation, fostering a transparent and active market.</p>
            </div>
            </div>

          </div>
            <Footer />
        </div>
    )
}