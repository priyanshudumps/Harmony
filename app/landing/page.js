"use client";
import Nabvar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image";
import React from "react";
import { WobbleCardDemo } from "../../components/Wobble";
import { HeroHighlightDemo } from "@/components/HeroHigh";
import { AnimatedPinDemo } from "../../components/Pin";


export default function Landing() {
    return(
        <div className="w-full items-center justify-between">
            <Nabvar />

            <div className="text-center mt-20 ">
                 <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl mt-10">
                    Get Set<mark className="bg-emerald-500 ml-3 rounded-lg px-3">Harmony</mark> Into Impact .
                 </h1>
                 <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl mt-1">
                    Empower a Sustainable Future, One Credit at a Time. Fuel the
                    Change with Green Energy Credits..
                 </h1>
            </div>
           <AnimatedPinDemo />

            
            
            <h1 className=" text-5xl font-extrabold tracking-tight lg:text-6xl mt-10 text-center">
                    Generate Revenue With Harmony .
                 </h1>
          <h1 className=" text-5xl font-extrabold font-serif tracking-tight lg:text-2xl mt-1 text-center">
                    Leveraging the power of Lisk 🩵.
                 </h1>
            <div className="mt-8">
            <WobbleCardDemo />
            </div>
            <HeroHighlightDemo/>
            

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

          
            <Footer />
        </div>
    )
}