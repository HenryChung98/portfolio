import DescBox from "./DescBox";

export default function GameProjects() {
  return (
    <>
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/pokerBanner.webp"}
        imgAlt={"Banner for Poker Game, developed in Unity, Role: Tech Lead & Programmer"}
        title={"Texas Hold'em Poker Game (Role: Lead Engineer)"}
        skillIcons={["/Icons/unity-game-engine-icon.webp", "/Icons/cs-icon.webp"]}
        skillIconAlts={["Unity Engine", "C#"]}
        subTitle={"Poker game with AI opponents for Software Engineering course team project"}
        descNum={3}
        desc={[
          "Play cards and manage bets through game rounds",
          "Evaluate hands and determine winners",
          "Interact with UI elements and track chip counts",
        ]}
        sourceCodeLink={"https://github.com/HenryChung98/CMPT2276-POKER2"}
        team
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/gameJamBanner.webp"}
        imgAlt={"Speech Bubble Game Banner for platformer game, Role: Programmer"}
        title={"Speech Bubble Game (Role: Programmer)"}
        skillIcons={["/Icons/unity-game-engine-icon.webp", "/Icons/cs-icon.webp"]}
        skillIconAlts={["Unity Engine", "C#"]}
        subTitle={"Speech bubble platformer game themed 'Bubble' at the Vancouver Global Game Jam"}
        descNum={2}
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
        imgAlt={
          "Banner for Shooter game with level design and weapon systems, developed in Unreal Engine"
        }
        title={"Shooter Game"}
        skillIcons={["/Icons/unreal-engine-icon.webp"]}
        skillIconAlts={["Unreal Engine"]}
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
        imgAlt={
          "Banner for VR Shooter game playable on Meta Quest Link, developed in Unreal Engine"
        }
        title={"VR Shooter Game"}
        skillIcons={["/Icons/unreal-engine-icon.webp"]}
        skillIconAlts={["unreal-engine"]}
        subTitle={"VR shooter playable on Meta Quest Link headset"}
        descNum={3}
        desc={["Intense shooting action", "dynamic hand animations", "Recall grabbable objects"]}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/rotationRushBanner.webp"}
        imgAlt={
          "Banner for Rotation Rush endless game with screen-spinning twists, developed in Unity and C#"
        }
        title={"Infinite Scroll Game"}
        skillIcons={["/Icons/unity-game-engine-icon.webp", "/Icons/cs-icon.webp"]}
        skillIconAlts={["unreal-engine", "cs"]}
        subTitle={"Endless game with screen-spinning twists and obstacle dodging"}
        descNum={2}
        desc={["Endless gameplay", "Challenging obstacle"]}
        sourceCodeLink={"https://github.com/HenryChung98/RotationRush"}
        moveLink={"https://9henrychung8.itch.io/rotation-rush"}
        accessMethod={"playNow"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/levelDevilCloneBanner.webp"}
        imgAlt={
          "Banner for Level Devil Clone platformer game with multiple stages and unpredictable obstacles, developed in Unity and C#"
        }
        title={"Level Devil Clone"}
        skillIcons={["/Icons/unity-game-engine-icon.webp", "/Icons/cs-icon.webp"]}
        skillIconAlts={["unreal-engine", "cs"]}
        subTitle={
          "A clone of Level Devil, a challenging platformer featuring unpredictable traps and obstacle-based gameplay."
        }
        descNum={3}
        desc={["Multiple stages", "Unexpected obstacle", "Goal door to move next stage"]}
        sourceCodeLink={"https://henrychung98.github.io/project/levelDevilClone1/"}
        moveLink={"https://9henrychung8.itch.io/level-devil-clone"}
        accessMethod={"download"}
      />
      <DescBox
        imgRatio={"square"}
        imgPath={"/projectDescAssets/game/mouseAccuracyBanner.webp"}
        imgAlt={
          "Banner for Mouse Accuracy Training game focusing on precision shooting and reaction time, developed in C++"
        }
        title={"Mouse Accuracy Training"}
        skillIcons={["/Icons/cpp-icon.webp"]}
        skillIconAlts={["cpp"]}
        subTitle={"Mouse training for shooting games"}
        descNum={3}
        desc={["Precision shooting drills", "Reaction time test", "or endless gameplay"]}
        sourceCodeLink={"https://github.com/HenryChung98/mouse-accuracy-training"}
      />

      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/game/liarGameBanner.webp"}
        imgAlt={
          "Banner for Liar Game web application, simple psychological game developed in JavaScript"
        }
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
