import DescBox from "./DescBox";

export default function WebProjects() {
  return (
    <>
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/crmApplicationBanner.webp"}
        title={"CRM Application (Ongoing)"}
        imgAlt={
          "Banner for multi-organization CRM web application using Next.js, TypeScript, Supabase, and Tailwind CSS"
        }
        skillIcons={[
          "/Icons/tanstack-query-icon.webp",
          "/Icons/shadcn-ui-icon.webp",
          "/Icons/nextjs-icon.webp",
          "/Icons/supabase-icon.webp",
          "/Icons/postgresql-icon.webp",
          "/Icons/typescript-icon.webp",
          "/Icons/tailwind-css-icon.webp",
        ]}
        skillIconAlts={["tanstack", "shadcn", "nextjs", "supabase", "postgresql", "typescript", "tailwind"]}
        subTitle={"Multi-organization CRM Web Application"}
        descNum={3}
        desc={[
          "User management across multiple organizations",
          "Reusable hooks and components for UI",
          "Responsive and scalable frontend-backend interactions",
        ]}
        moveLink={"https://henry-crm-project.vercel.app/"}
        accessMethod={"website"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/quickdocxBanner.webp"}
        imgAlt={"Banner for docx editor using Next.js, TypeScript, Supabase, and Tailwind CSS"}
        title={"Quick Docx (Active)"}
        skillIcons={[
          "/Icons/oracle-icon.webp",
          "/Icons/docker-icon.webp",
          "/Icons/drizzle-orm-icon.webp",
          "/Icons/tanstack-query-icon.webp",
          "/Icons/shadcn-ui-icon.webp",
          "/Icons/nextjs-icon.webp",
          "/Icons/supabase-icon.webp",
          "/Icons/postgresql-icon.webp",
          "/Icons/typescript-icon.webp",
          "/Icons/tailwind-css-icon.webp",
        ]}
        skillIconAlts={[
          "oracle",
          "docker",
          "drizzle",
          "tanstack",
          "shadcn",
          "nextjs",
          "supabase",
          "postgresql",
          "typescript",
          "tailwind",
        ]}
        subTitle={"Docx Based Editor"}
        descNum={3}
        desc={[
          "DOCX editor with PDF conversion using Gotenberg (Docker image)",
          "Credit-based access to features",
          "Free-limit enforcement via hashed IP for anonymous users",
        ]}
        moveLink={"https://quick-docx.vercel.app/"}
        accessMethod={"website"}
      />
      <DescBox
        imgRatio={"landscape"}
        imgPath={"/projectDescAssets/web/auctionBanner.webp"}
        imgAlt={
          "Banner for auction platform website developed for competitive bidding, backend role using Next.js, JavaScript, and MongoDB"
        }
        title={"Auction Website(Role: Backend)"}
        skillIcons={[
          "/Icons/nextjs-icon.webp",
          "/Icons/mongodb-icon.webp",
          "/Icons/javascript-icon.webp",
        ]}
        skillIconAlts={["nextjs", "mongodb", "javascript"]}
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
    </>
  );
}
