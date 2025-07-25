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
    date: "2025-07-22",
    title: "AECOM leads redevelopment of historic industrial zone in Dubai",
    types: "News",
    market: "Industrial",
    regions: "Middle East & Africa",
    year: 2024,
    summary:
      "AECOM announced a major industrial redevelopment project in Dubai, converting legacy infrastructure into state-of-the-art logistics and innovation zones.",
  },
  {
    date: "2024-03-03",
    title: "AECOM secures education master plan for Southeast Asia",
    types: "Projects",
    market: "Education",
    regions: "APAC",
    year: 2023,
    summary:
      "AECOM has been selected to lead the education infrastructure modernization for several emerging economies across Southeast Asia.",
  },
  {
    date: "2023-12-15",
    title: "Major sustainability award for water management innovation",
    types: "Awards",
    market: "Water",
    regions: "Europe",
    year: 2023,
    summary:
      "AECOM's European team received international recognition for water conservation and reuse technologies deployed in the Netherlands.",
  },
  {
    date: "2022-08-07",
    title: "New justice infrastructure program in South America",
    types: "Statements",
    market: "Justice",
    regions: "Americas",
    year: 2022,
    summary:
      "AECOM partners with national governments in South America to plan and deliver sustainable judicial facilities and correctional centers.",
  },
  {
    date: "2021-11-11",
    title: "Global healthcare expansion with AI-integrated hospitals",
    types: "Financials",
    market: "Healthcare",
    regions: "Middle East & Africa",
    year: 2021,
    summary:
      "AECOM announces multi-billion dollar investments into smart healthcare infrastructure with AI-powered diagnostics across MENA.",
  },
  {
    date: "2020-04-02",
    title: "Transportation corridor to boost African connectivity",
    types: "Projects",
    market: "Transportation",
    regions: "Middle East & Africa",
    year: 2020,
    summary:
      "AECOM collaborates with African Union to develop the Trans-Africa corridor spanning over 1,500 kilometers across four nations.",
  },
  {
    date: "2019-01-19",
    title: "Oil & gas sustainability strategy launched by AECOM",
    types: "Statements",
    market: "Oil, Gas & Chemicals",
    regions: "APAC",
    year: 2019,
    summary:
      "AECOM releases its decarbonization roadmap for oil and gas projects in Asia Pacific, focusing on renewable integration and emissions monitoring.",
  },
];

// Dummy Contacts
const contacts = [
  { name: "Jason Marshall", regions: "Global" },
  { name: "Quincy Zhai", region: "Americas" },
  { name: "Rebecca Adam", region: "Australia & New Zealand" },
  { name: "Rebecca Lam", region: "Asia Pacific" },
  { name: "Rachel Brierley", region: "Europe & India" },
  { name: "Bahaa Hage", region: "Middle East & Africa" },
];
// Add more entries if needed

const NewsBlogs = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
  };

  const filteredNews = newsData.filter((item) => {
    return Object.entries(selectedFilters).every(([key, value]) => {
      if (!value || value === "All") return true;
      return String(item[key]).toLowerCase() === String(value).toLowerCase();
    });
  });

  const sortedNews = [...filteredNews].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const toggleDropdown = (type) => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };
  return (
    <>
      <div className="news-page-wrapper">
        <HeroSectionNews title="Press Releases" background={pressReleaseBg} />

        <div className="main-container">
          <div className="w-full lg:w-2/3">
            <SortBar
              // onClear={() => setOpenDropdown(null)}
              onClear={handleClearFilters}
              onSortChange={setSortOrder}
            />
            <FilterUIBar
              selectedFilters={selectedFilters}
              onSelect={handleFilterChange}
            />
            {sortedNews.map((item, i) => (
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
