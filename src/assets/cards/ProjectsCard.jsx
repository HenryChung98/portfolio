// when convert to gif
// size: original(up to 600px)
// frame rate(FPS): 20(max 15 seconds)
// method: FFMPEG
import { useState } from "react";

import GameProjects from "../components/Projects/GameProjects";
import WebProjects from "../components/Projects/WebProjects";
import EtcProjects from "../components/Projects/EtcProjects";

export default function ProjectsCard() {
  const [isSelected, setIsSelected] = useState("game");
  const handleClick = (selected) => {
    setIsSelected(selected);
  };

  return (
    <>
      <div className="border-b-2 font-bold text-[#0F172A] flex items-center justify-between">
        <h3 className="text-xl">Projects</h3>
        <ul className="flex ml-4">
          <li className="inline-block text-center">
            <button
              className={`${
                isSelected == "game" && "bg-blue-600 text-white opacity-80"
              } duration-100 px-3 py-1 w-20 rounded-full mb-1`}
              onClick={() => handleClick("game")}
            >
              Game
            </button>
          </li>
          <li className="inline-block w-20 text-center">
            <button
              className={`${
                isSelected == "web" && "bg-blue-600 text-white opacity-80"
              } duration-100 px-3 py-1 w-20 rounded-full mb-1`}
              onClick={() => handleClick("web")}
            >
              Web
            </button>
          </li>
          <li className="inline-block w-20 text-center">
            <button
              className={`${
                isSelected == "etc" && "bg-blue-600 text-white opacity-80"
              } duration-100 px-3 py-1 w-20 rounded-full mb-1`}
              onClick={() => handleClick("etc")}
            >
              Etc
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap">
        {isSelected == "game" && (
          <>
            <GameProjects />
          </>
        )}
        {isSelected == "web" && (
          <>
            <WebProjects />
          </>
        )}
        {isSelected == "etc" && (
          <>
            <EtcProjects />
          </>
        )}
      </div>
    </>
  );
}
