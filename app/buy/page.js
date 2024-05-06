"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getOrdersArray, addGenStation, getMarketPrice, getHmTokenBalance,} from "../../utils";
import Card from "../../components/Card";

export default function Main() {
  const [hmBalance, setHmBalance] = useState("Fetching ...");
  const [marketPrice, setMarketPrice] = useState("Fetching");
  const [ordersArray, setOrdersArray] = useState([]);

  async function handleHmBalanceUpdate() {
    //console.log("Fetching GW token balance...");
    try {
      const updatedBalance = await getHmTokenBalance();
      console.log("Fetched balance:", updatedBalance);
      setHmBalance(updatedBalance);
    } catch (error) {
      console.error("Failed to fetch HM token balance:", error);
    }
  }

  async function updateArray() {
    const arr = await getOrdersArray();
    //console.log(arr);
    setOrdersArray(arr);

    //console.log(ordersArray);
    // for (let i = 0; i < ordersArray.length; i++) {
    //     if(ordersArray[i][9]){
    //         const currArr = ordersArray[i];
    //         //console.log(currArr[i]);
    //         <Card array={currArr}></Card>
    //     }
    //   //console.log(ordersArray[i][0]);
    //   for (let j = 0; j < ordersArray[i].length; j++) {
    //     //console.log(ordersArray[i][j]);
    //   }
    // }
  }

  async function updateMarketPrice() {
    try {
      const updatedPrice = await getMarketPrice();
      console.log("Fetched Market Price:", updatedPrice);
      setMarketPrice(updatedPrice);
    } catch (error) {
      console.error("Failed to fetch HM token balance:", error);
    }
  }

  useEffect(() => {
    handleHmBalanceUpdate();
    updateArray();
    updateMarketPrice();
  }, [ordersArray]);

  return (
    <div className="w-full h-max-screen ">
      <Navbar />

      <div className="border-2 border-zinc-900 p-2 mt-10 mx-60 rounded ">
      <div className="text-center text-3xl  font-extrabold tracking-tight">
        You have generated <span className="text-green-600">{hmBalance}</span>{" "}
        HM tokens{" "}
      </div>

      <div className="text-center text-3xl pt-2 font-extrabold tracking-tight">
        Current Market Price{" "}
        <mark className="px-5 rounded-3xl bg-white"><span className="text-green-600">{marketPrice}</span></mark> per Token{" "}
      </div>
      </div>

      {ordersArray.map((data) => {
        if (!data[9]) {
          return <Card key={data[0]} array={data}></Card>;
        }
      })}
    </div>
  );
}
