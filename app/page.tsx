import Image from "next/image";
import Nabvar from "../components/Navbar";
import Landing from "./landing/page";
export default function Home() {
  return (
    <main className=" items-center justify-between h-screen-max bg-slate-200">
      <Landing />
    </main>
  );
}
