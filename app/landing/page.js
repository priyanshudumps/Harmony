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
          <div className="flex flex-row gap-5 mx-36 mt-10">
          
            {/* card component */}
            
          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-lg h-96 md:h-auto md:w-48 ml-5" src="https://wallpapercave.com/wp/wp3788133.jpg" alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </a>

          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-lg h-96 md:h-auto md:w-48 ml-5 " src="https://t4.ftcdn.net/jpg/06/29/94/97/360_F_629949736_LZTYQWh9XsKztcCJhXvuc0EQK3hDwp54.jpg" alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </a>
          
          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-lg h-96 md:h-auto md:w-48 ml-5" src="https://i.pinimg.com/originals/6b/96/f5/6b96f558372cbc0017ad095896d42d9e.jpg" alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
          </a>


          </div>
            <Footer />
        </div>
    )
}