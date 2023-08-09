import Image from "next/image";
import NavBar from "./components/NavBar";
import Highlights from "./components/Highlights";
import Bio from "./components/Bio";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen w-full">
      <div className="bg-white mx-16 h-screen">
        <NavBar />
        <div className="flex">
          <Bio />
          <Highlights />
        </div>
      </div>
    </div>
  );
}
