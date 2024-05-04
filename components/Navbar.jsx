import Link from "next/link";
export default function Nabvar() {
    return(
        <div className="">
            <nav className=" border-gray-200 bg-slate-500 m-3  rounded-lg backdrop-blur-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <Link legacyBehavior href="/landing">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Harmony Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Harmony</span>
          </a>
          </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none  font-medium rounded-lg text-md px-8 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Get started</button>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">

        <ul className="flex flex-col font-sans font-semibold text-2xl md:p-1 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-500  ">

        <Link legacyBehavior href="/sensor">
        <li>
        <a href="#" className="block py-2 px-3 md:p-0 mx-5 text-white hover:text-black rounded  " aria-current="page"><mark className="px-5 rounded-full bg-green-300">Add Sensor</mark></a>
        </li>
        </Link>

        <Link legacyBehavior href="/sale">
        <li>
        <a href="#" className="block py-2 px-3 md:p-0 mx-5 text-white hover:text-black rounded  ">Sale</a>
        </li>
        </Link>
        
        <Link legacyBehavior href="/buy">
        <li>
        <a href="#" className="block py-2 px-3 md:p-0 mx-5 text-white hover:text-black  ">Buy</a>
        </li>
        </Link>

        </ul>
      </div>
    </div>
  </nav>
        </div>
    )
}