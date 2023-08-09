import Image from "next/image";

const Highlights = () => {
  return (
    <div className="px-14 pt-20">
      <Image
        src="/img/full.jpg"
        alt="Naruto"
        width={800}
        height={1800}
        className="rounded-lg shadow-md rotate-3"
      />
      <div className="mt-6">
        <h2 className="font-bold text-3xl">Naruto Uzumaki</h2>
        <span className="italic">
          <p>🍥 Hidden Leaf Village | Hokage-in-Training</p>
          <p>📧 Contact: HokageTower123@leafmail.com</p>
        </span>
        <hr></hr>
        <h3 className="font-semibold text-xl text-gray-700 mt-5 mb-1">Skills</h3>
        <ul>
          <li>✨ Shadow Clone Jutsu</li>
          <li>💥 Rasengan</li>
          <li>🍃 Sage Mode</li>
          <li>💪 Indomitable Willpower</li>
          <li>👥 Strong Leadership</li>
        </ul>
      </div>
    </div>
  );
};

export default Highlights;
