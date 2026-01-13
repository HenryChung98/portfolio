import DescBox from "./DescBox";

export default function WebProjects() {
  return (
    <>
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/crmApplicationBanner.webp"}
        imgAlt={
          "Banner for multi-organization CRM web application using Next.js, TypeScript, Supabase, and Tailwind CSS"
        }
        title={"CRM Application (Ongoing)"}
        skillIcons={[
          "/Icons/tanstack-query-icon.webp",
          "/Icons/typescript-icon.webp",
          "/Icons/nextjs-icon.webp",
          "/Icons/supabase-icon.webp",
          "/Icons/tailwind-css-icon.webp",
        ]}
        skillIconAlts={["tanstack", "ts", "nextjs", "supabase", "tailwind"]}
        subTitle={"Multi-organization CRM Web Application"}
        descNum={3}
        desc={[
          "User management across multiple organizations",
          "Reusable hooks and components for UI",
          "Responsive and scalable frontend-backend interactions",
        ]}
        sourceCodeLink={
          "https://www.figma.com/board/2dp3cNv1EhX42ZtKcvvpAj/crm-project?node-id=0-1&p=f&t=7AduMzPWX6jn3klP-0"
        }
        moveLink={"https://henry-crm-project.vercel.app/"}
        accessMethod={"website"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/chatAppBanner.webp"}
        imgAlt={
          "Banner for real-time chat application built with Next.js, JavaScript, Socket.IO, Tailwind CSS, and MySQL"
        }
        title={"Chat Application"}
        skillIcons={[
          "/Icons/javascript-icon.webp",
          "/Icons/nextjs-icon.webp",
          "/Icons/socket-io-icon.webp",
          "/Icons/tailwind-css-icon.webp",
          "/Icons/mysql-icon.webp",
        ]}
        skillIconAlts={["js", "nextjs", "socket-io", "tailwind", "mysql"]}
        subTitle={"Real-time chat and messaging"}
        descNum={1}
        desc={["A simple chat app featuring real-time messaging and easy connectivity"]}
        sourceCodeLink={"https://github.com/HenryChung98/multi-player-games"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/auctionBanner.webp"}
        imgAlt={
          "Banner for auction platform website developed for competitive bidding, backend role using Next.js, JavaScript, and MongoDB"
        }
        title={"Auction Website(Role: Backend)"}
        skillIcons={["/Icons/javascript-icon.webp", "/Icons/nextjs-icon.webp", "/Icons/mongodb-icon.webp"]}
        skillIconAlts={["js", "nextjs", "mongodb"]}
        subTitle={
          "Competitive bidding platform built for Full-Stack Development course team project"
        }
        descNum={1}
        desc={["An intuitive auction platform built to simplify bidding"]}
        sourceCodeLink={"https://github.com/timdonato/csis3380-final"}
        moveLink={"https://csis3380-final.netlify.app/"}
        accessMethod={"website"}
        team
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/weatherAppBanner.webp"}
        imgAlt={
          "Banner for simple weather application built with JavaScript, allowing city search and weather information display"
        }
        title={"Weather App"}
        skillIcons={["/Icons/javascript-icon.webp"]}
        skillIconAlts={["js"]}
        subTitle={"Simple weather application"}
        descNum={2}
        desc={["Search for a city and check the current weather", "See the location as well"]}
        sourceCodeLink={"https://github.com/HenryChung98/weather-app"}
      />
    </>
  );
}
