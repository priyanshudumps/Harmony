"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getOrdersArray, addGenStation, getMarketPrice, getHmTokenBalance,} from "../../utils";
import Card from "../../components/Card";
import { GridBackgroundDemo } from "../../components/grid";

export default function Main() {
 

  return (
    <div className="w-full h-max-screen ">
      <Navbar />
      <GridBackgroundDemo />

     </div>
  );
}
