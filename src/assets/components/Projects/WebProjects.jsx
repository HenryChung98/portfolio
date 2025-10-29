import DescBox from "./DescBox";

export default function WebProjects() {
  return (
    <>
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/crmApplicationBanner.webp"}
        title={"CRM Application (Ongoing)"}
        skillIcons={[
          "/Icons/ts-icon.webp",
          "/Icons/nextjs-icon.webp",
          "/Icons/supabase-icon.webp",
          "/Icons/tailwind-css-icon.webp",
        ]}
        skillIconAlts={["ts", "nextjs", "supabase", "tailwind"]}
        subTitle={"Multi-organization CRM Web Application"}
        descNum={3}
        desc={[
          "User management across multiple organizations",
          "Reusable hooks and components for UI",
          "Responsive and scalable frontend-backend interactions",
        ]}
        sourceCodeLink={"https://github.com/HenryChung98/crm-project"}
        moveLink={"https://henry-crm-project.vercel.app/"}
        accessMethod={"website"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/chatAppBanner.webp"}
        title={"Chat Application"}
        skillIcons={[
          "/Icons/js-icon.webp",
          "/Icons/nextjs-icon.webp",
          "/Icons/socket-io-icon.webp",
          "/Icons/tailwind-css-icon.webp",
          "/Icons/mysql-icon.webp",
        ]}
        skillIconAlts={["js", "nextjs", "socket-io", "tailwind", "mysql"]}
        subTitle={"Real-time chat and messaging"}
        descNum={1}
        desc={[
          "A simple chat app featuring real-time messaging and easy connectivity",
        ]}
        sourceCodeLink={"https://github.com/HenryChung98/multi-player-games"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/auctionBanner.webp"}
        title={"Auction Website(Role: Backend)"}
        skillIcons={[
          "/Icons/js-icon.webp",
          "/Icons/nextjs-icon.webp",
          "/Icons/mongodb-icon.webp",
        ]}
        skillIconAlts={["js", "nextjs", "mongodb"]}
        subTitle={"A Platform for Competitive Bidders"}
        descNum={1}
        desc={["An intuitive auction platform built to simplify bidding"]}
        sourceCodeLink={"https://github.com/timdonato/csis3380-final"}
        moveLink={"https://csis3380-final.netlify.app/"}
        accessMethod={"website"}
        team
      />
      <DescBox
        imgRatio={"portrait"}
        imgPath={"/projectDescAssets/web/todoListBanner.webp"}
        title={"To-Do-List"}
        skillIcons={["/Icons/ts-icon.webp"]}
        skillIconAlts={["ts"]}
        subTitle={"Simple To-Do-List application"}
        descNum={2}
        desc={["Task Management", "Checklists"]}
        sourceCodeLink={"https://github.com/HenryChung98/to-do-list-practice"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/weatherAppBanner.webp"}
        title={"Weather App"}
        skillIcons={["/Icons/js-icon.webp"]}
        skillIconAlts={["js"]}
        subTitle={"Simple weather application"}
        descNum={2}
        desc={[
          "Search for a city and check the current weather",
          "See the location as well",
        ]}
        sourceCodeLink={"https://github.com/HenryChung98/weather-app"}
      />
    </>
  );
}
