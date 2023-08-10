import profile from "../assets/thumbnail.png";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [kudos, setKudos] = useState(0);

  async function addKudo() {
    await fetch("http://localhost:5000/kudo/new");
    getKudos();
  }

  async function getKudos() {
    const response = await fetch("http://localhost:5000/kudos");
    const data = await response.json();
    setKudos(data.count);
  }

  useEffect(() => {
    getKudos();
  }, []);

  return (
    <div className="flex justify-between w-full items-center px-14 pt-5">
      <img
        src={profile}
        alt="Naruto"
        width={50}
        height={50}
        className="rounded-full shadow-md p-[1px] cursor-pointer"
      />
      <div className="flex justify-between rounded-full px-8 py-2 items-center border-b-[1px] border-b-grey font-xs gap-7 font-light">
        <h3 className="cursor-pointer text-md font-semibold text-gray-600">
          Ninja Curriculum Vitae
        </h3>
      </div>
      <div
        className="rounded-full border-[1px] border-grey shadow-sm p-2 cursor-pointer"
        onClick={addKudo}
      >
        <div className="flex items-center justify-center gap-1">
          <span>🍥</span>
          <span className="font-bold text-xs text-gray-500 hover:text-[#F56E45]">
            {kudos}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
