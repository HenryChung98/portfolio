{
  /* <DescBox
          imgRatio={"square"}
          imgPath={"/projectDescAssets/game/levelDevilCloneBanner.gif"}
          title={"etc"}
          subTitle={"1 This is level devil clone game."}
          descNum={4}
          desc={[
            "Designed and implemented by something",
            "Unexpected obstacle",
            "What else",
            "What else",
          ]}
          sourceCodeLink={"#"}
          moveLink={"#"}
          accessMethod={"download"}
        /> */
}

export default function DescBox({
  imgRatio,
  imgPath,
  imgAlt,
  title,
  skillIcons = [],
  skillIconAlts = [],
  subTitle,
  descNum,
  desc = [],
  sourceCodeLink,
  moveLink,
  accessMethod,
  team = false,
}) {
  return (
    <>
      <article
        className={`border-b-2 border-gray-900 p-2 flex flex-col md:flex-row justify-around w-full`}
      >
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative inline-block group">
            {team ? (
              <div className="absolute top-3 left-3 z-10 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm border-2 border-gray-700 group-hover:scale-105 transition-transform duration-300">
                Team
              </div>
            ) : (
              <div className="absolute top-3 left-3 z-10 bg-blue-500 text-white px-3 py-1 rounded-full text-sm border-2 border-gray-700 group-hover:scale-105 transition-transform duration-300">
                Solo
              </div>
            )}
            <img
              src={`/henry-portfolio${imgPath}`}
              alt={imgAlt}
              className={`m-6 rounded shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl border-2 border-gray-700
                ${imgRatio === "square" && "w-[200px] h-[200px]"}
                ${
                  imgRatio === "landscape" &&
                  "w-[240px] h-[160px] md:w-[300px] md:h-[200px]"
                } 
                ${
                  imgRatio === "portrait" &&
                  "w-w-[160px] h-[240px] md:w-[200px] md:h-[300px]"
                }
              `}
            />{" "}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col">
            <h3 className="text-xl text-gray-800 font-bold m-5 mb-3">
              {title}
            </h3>
            <div className="flex flex-wrap mx-4">
              {skillIcons.map((icon, index) => (
                <img
                  key={index}
                  src={`/henry-portfolio${icon}`}
                  alt={skillIconAlts[index] || `Skill Icon ${index + 1}`}
                  className="max-w-[24px] md:max-w-[20px] mx-1"
                />
              ))}
            </div>
          </div>
          <h3 className="text-sm text-gray-600 m-5 mb-3 font-semibold">
            {subTitle}
          </h3>
          <ul className="text-blue-800 ml-5 text-sm md:text-xs font-bold">
            {sourceCodeLink && (
              <a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="inline mr-10 hover:text-blue-300 duration-200">
                  Source Code
                </li>
              </a>
            )}
            <a href={moveLink} target="_blank" rel="noopener noreferrer">
              <li className="inline hover:text-blue-300 duration-200">
                {accessMethod === "download" && "Download"}
                {accessMethod === "playNow" && "Play Now"}
                {accessMethod === "website" && "Go To Website"}
              </li>
            </a>
          </ul>
          <ul className="text-gray-500 m-5 text-sm md:text-xs font-semibold space-y-2">
            {desc.slice(0, descNum).map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}
