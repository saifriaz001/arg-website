import React, { useState } from "react";
import pressReleaseBg from "../yahya-images/press-release-bg.jpg";
import FilterUIBar from "../NewsPageComponents/FilterUIBar";
import "../yahya-css/news-blogs.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaAngleDown,
} from "react-icons/fa";

import HeroSectionNews from "../NewsPageComponents/HeroSectionNews";
import SortBar from "../NewsPageComponents/SortBar";
import NewsCard from "../NewsPageComponents/NewsCard";
import NewsSideBar from "../NewsPageComponents/NewsSideBar";

const newsData = [
  {
    date: "JULY 22, 2025",
    title:
      "AECOM to enhance mobility across the Greater Bay Area by delivering the Hong Kong Section of the Hong Kong-Shenzhen Western Rail Link (Hung Shui Kiu-Qianhai)",
    types: "Projects",
    market: "cities",
    region: "",
    year: 2025,
    summary:
      "DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement, DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement",
  },
  {
    date: "JULY 22, 2025",
    title:
      "AECOM to enhance mobility across the Greater Bay Area by delivering the Hong Kong Section of the Hong Kong-Shenzhen Western Rail Link (Hung Shui Kiu-Qianhai)",
    types: "Projects",
    market: "cities",
    region: "",
    year: 2025,
    summary:
      "DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement, DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement",
  },
  {
    date: "JULY 22, 2025",
    title:
      "AECOM to enhance mobility across the Greater Bay Area by delivering the Hong Kong Section of the Hong Kong-Shenzhen Western Rail Link (Hung Shui Kiu-Qianhai)",
    types: "Projects",
    market: "cities",
    region: "",
    year: 2025,
    summary:
      "DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement, DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement",
  },
  {
    date: "JULY 22, 2025",
    title:
      "AECOM to enhance mobility across the Greater Bay Area by delivering the Hong Kong Section of the Hong Kong-Shenzhen Western Rail Link (Hung Shui Kiu-Qianhai)",
    types: "Projects",
    market: "cities",
    region: "",
    year: 2025,
    summary:
      "DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement, DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement",
  },
  {
    date: "JULY 22, 2025",
    title:
      "AECOM to enhance mobility across the Greater Bay Area by delivering the Hong Kong Section of the Hong Kong-Shenzhen Western Rail Link (Hung Shui Kiu-Qianhai)",
    types: "Projects",
    market: "cities",
    region: "",
    year: 2025,
    summary:
      "DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement, DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement",
  },
  {
    date: "JULY 22, 2025",
    title:
      "AECOM to enhance mobility across the Greater Bay Area by delivering the Hong Kong Section of the Hong Kong-Shenzhen Western Rail Link (Hung Shui Kiu-Qianhai)",
    types: "Projects",
    market: "cities",
    region: "",
    year: 2025,
    summary:
      "DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement, DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement",
  },
  {
    date: "JULY 22, 2025",
    title:
      "AECOM to enhance mobility across the Greater Bay Area by delivering the Hong Kong Section of the Hong Kong-Shenzhen Western Rail Link (Hung Shui Kiu-Qianhai)",
    types: "Projects",
    market: "cities",
    region: "",
    year: 2025,
    summary:
      "DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement, DALLAS (July 22, 2025) — AECOM (NYSE: ACM), the trusted global infrastructure leader, today announced that its joint venture with AtkinsRéalis has been awarded the consultancy agreement",
  },
];

// Dummy Contacts
const contacts = [
  { name: "Jason Marshall", region: "Global" },
  { name: "Quincy Zhai", region: "Americas" },
  { name: "Rebecca Adam", region: "Australia & New Zealand" },
  { name: "Rebecca Lam", region: "Asia Pacific" },
  { name: "Rachel Brierley", region: "Europe & India" },
  { name: "Bahaa Hage", region: "Middle East & Africa" },
];
// Add more entries if needed

const NewsBlogs = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (type) => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };
  return (
    <>
      <div className="news-page-wrapper">
        <HeroSectionNews title="Press Releases" background={pressReleaseBg} />

        <div className="main-container">
          <div className="w-full lg:w-2/3">
            <SortBar onClear={() => setOpenDropdown(null)} />
            <FilterUIBar />
            {newsData.map((item, i) => (
              <NewsCard key={i} item={item} />
            ))}
          </div>
          <NewsSideBar contacts={contacts} />
        </div>
      </div>
    </>
  );
};

export default NewsBlogs;
