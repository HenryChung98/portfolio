import DescBox from "./DescBox";

export default function EtcProjects() {
  return (
    <>
      <DescBox
        title={"File Manager"}
        subTitle={
          "File manager app that moves files based on their name or extension"
        }
        skillIcons={["/Icons/python-icon.webp"]}
        skillIconAlts={["Python"]}
        descNum={2}
        desc={["Organize your files", "os library"]}
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/etc/fileManagerBanner.webp"}
        imgAlt={"File manager created by Python with OS library"}
        sourceCodeLink={"https://github.com/HenryChung98/file-manager"}
      />
    </>
  );
}
