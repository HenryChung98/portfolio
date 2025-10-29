import DescBox from "./DescBox";

export default function GameProjects() {
  return (
    <>
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/gameJamBanner.webp"}
        title={"Speech Bubble Game (Role: Programmer)"}
        skillIcons={[
          "/Icons/unity-game-engine-icon.webp",
          "/Icons/cs-icon.webp",
        ]}
        skillIconAlts={["unity-engine", "cs"]}
        subTitle={
          "Speech bubble platformer game themed 'Bubble' at the Vancouver Global Game Jam"
        }
        descNum={4}
        desc={[
          "Gain abilities by interacting with speech bubbles",
          "Navigate through traps and obstacles",
        ]}
        sourceCodeLink={"https://github.com/mugwhump/GGJ2025-Paperless"}
        team
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/shooterGameBanner.webp"}
        title={"Shooter Game"}
        skillIcons={["/Icons/unreal-engine-icon.webp"]}
        skillIconAlts={["unreal-engine"]}
        subTitle={"Shooter game with level design, weapon systems"}
        descNum={4}
        desc={[
          "Multiple weapons",
          "Realistic recoil",
          "Immersive animations",
          "Goal-Oriented gameplay",
        ]}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/VRGameBanner.webp"}
        title={"VR Shooter Game"}
        skillIcons={["/Icons/unreal-engine-icon.webp"]}
        skillIconAlts={["unreal-engine"]}
        subTitle={"VR shooter playable on Meta Quest Link headset"}
        descNum={3}
        desc={[
          "Intense shooting action",
          "dynamic hand animations",
          "Recall grabbable objects",
        ]}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/rotationRushBanner.webp"}
        title={"Rotation Rush"}
        skillIcons={[
          "/Icons/unity-game-engine-icon.webp",
          "/Icons/cs-icon.webp",
        ]}
        skillIconAlts={["unreal-engine", "cs"]}
        subTitle={
          "Endless game with screen-spinning twists and obstacle dodging"
        }
        descNum={2}
        desc={["Endless gameplay", "Challenging obstacle"]}
        sourceCodeLink={"https://github.com/HenryChung98/RotationRush"}
        moveLink={"https://9henrychung8.itch.io/rotation-rush"}
        accessMethod={"playNow"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/infiniteScrollBanner.webp"}
        title={"Infinite Scroll Game"}
        skillIcons={["/Icons/unreal-engine-icon.webp"]}
        skillIconAlts={["unreal-engine", "cpp"]}
        subTitle={
          "An endless runner where players dodge obstacles while collecting coins"
        }
        descNum={3}
        desc={["Endless gameplay", "Challenging obstacle", "Collect coins"]}
        sourceCodeLink={""}
        moveLink={
          "https://9henrychung8.itch.io/practicing-deploying-unreal-engine-project"
        }
        accessMethod={"download"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/levelDevilCloneBanner.webp"}
        title={"Level Devil Clone"}
        skillIcons={[
          "/Icons/unity-game-engine-icon.webp",
          "/Icons/cs-icon.webp",
        ]}
        skillIconAlts={["unreal-engine", "cs"]}
        subTitle={
          "A clone of Level Devil, a challenging platformer featuring unpredictable traps and obstacle-based gameplay."
        }
        descNum={3}
        desc={[
          "Multiple stages",
          "Unexpected obstacle",
          "Goal door to move next stage",
        ]}
        sourceCodeLink={
          "https://henrychung98.github.io/project/levelDevilClone1/"
        }
        moveLink={"https://9henrychung8.itch.io/level-devil-clone"}
        accessMethod={"download"}
      />
      <DescBox
        imgRatio={"portrait"}
        imgPath={"/projectDescAssets/game/flappyBirdCloneBanner.webp"}
        title={"Flappy Bird Clone"}
        skillIcons={[
          "/Icons/unity-game-engine-icon.webp",
          "/Icons/cs-icon.webp",
        ]}
        skillIconAlts={["unreal-engine", "cs"]}
        subTitle={"A clone of the classic Flappy Bird game"}
        descNum={2}
        desc={["Endless gameplay", "Challenging obstacle"]}
        sourceCodeLink={"https://github.com/HenryChung98/Flappy-Bird-Clone"}
        moveLink={"#"}
        accessMethod={""}
      />
      <DescBox
        imgRatio={"square"}
        imgPath={"/projectDescAssets/game/mouseAccuracyBanner.webp"}
        title={"Mouse Accuracy Training"}
        skillIcons={["/Icons/cpp-icon.webp"]}
        skillIconAlts={["cpp"]}
        subTitle={"Mouse training for shooting games"}
        descNum={3}
        desc={[
          "Precision shooting drills",
          "Reaction time test",
          "or endless gameplay",
        ]}
        sourceCodeLink={
          "https://github.com/HenryChung98/mouse-accuracy-training"
        }
      />

      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/liarGameBanner.webp"}
        title={"Liar Game"}
        skillIcons={["/Icons/js-icon.webp"]}
        skillIconAlts={["js"]}
        subTitle={"Liar game application developed by JavaScript"}
        descNum={1}
        desc={["Simple psychological game"]}
        sourceCodeLink={"https://github.com/HenryChung98/liar-game"}
        moveLink={"https://henrychung98.github.io/liar-game/"}
        accessMethod={"playNow"}
      />
    </>
  );
}
