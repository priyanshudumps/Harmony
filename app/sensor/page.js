"use client";
import { useEffect, useState } from "react";
// import { addGenStation } from "../../utils";
import Navbar from "@/components/Navbar";
function AddGenSensor() {
  const [code, setCode] = useState("");
  function handleAddSensor() {
    addGenStation(code);
  }
  return (
    <>
      <Navbar />
      <div className="mt-40 text-center border-2 border-zinc-950 w-1/2 ml-96 rounded-lg pt-5 pb-5">
        <label className="text-3xl font-semibold" htmlFor="">
          Enter Secret Code
        </label>
        <br />
        <input
          className="text-black text-2xl font-semibold h-8 w-64 mt-10 rounded-md border-2 border-slate-900"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            //console.log(code);
          }}
          type="text"
        />

        <button
          className="border ml-8 px-5 py-1 text-black font-bold rounded-xl border-slate-900 hover:bg-white hover:text-black"
          onClick={() => {
            handleAddSensor();
          }}
        >
          ADD
        </button>

        <p className="text-xl mt-24">
        &quot; Add sensors to make sure their reportings are added to your account
        &quot;
        </p>
      </div>
    </>
  );
}
export default AddGenSensor;
