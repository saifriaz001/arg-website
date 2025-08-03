import React, { useEffect, useState, useMemo } from "react";
import pressReleaseBg from "../yahya-images/press-release-bg.jpg";
import FilterUIBar from "../NewsPageComponents/FilterUIBar";
import "../yahya-css/news-blogs.css";

import HeroSectionNews from "../NewsPageComponents/HeroSectionNews";
import SortBar from "../NewsPageComponents/SortBar";
import NewsCard from "../NewsPageComponents/NewsCard";
import NewsSideBar from "../NewsPageComponents/NewsSideBar";
import Pagination from "../NewsPageComponents/Pagination";

import { newsData, contacts, newsFilterOptions } from "../utils/constants";

// Add more entries if needed
const ITEMS_PER_PAGE = 1;

const NewsBlogs = () => {
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
  };

  const sortedNews = useMemo(() => {
    console.log("Filtering and sorting..."); // This will now only run when dependencies change

    const filtered = newsData.filter((item) => {
      return Object.entries(selectedFilters).every(([key, value]) => {
        if (!value || value === "All") return true;
        return String(item[key]).toLowerCase() === String(value).toLowerCase();
      });
    });

    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [newsData, selectedFilters, sortOrder]); // Dependencies

  const totalPages = Math.ceil(sortedNews.length / ITEMS_PER_PAGE);

  const currentNewsItems = useMemo(() => {
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    return sortedNews.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage, sortedNews]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilters, sortOrder]);

  return (
    <div className="news-page-wrapper">
      <HeroSectionNews title="Press Releases" background={pressReleaseBg} />

      <div className="main-container">
        <div className="w-full lg:w-2/3">
          <SortBar onClear={handleClearFilters} onSortChange={setSortOrder} />
          <FilterUIBar
            dropdownOptions={newsFilterOptions}
            selectedFilters={selectedFilters}
            onSelect={handleFilterChange}
          />

          {currentNewsItems.length > 0 ? (
            <>
              {currentNewsItems.map((item) => (
                <NewsCard key={item?.title} item={item} />
              ))}

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          ) : (
            // If sortedNews is empty, render the fallback message
            <div className="text-center py-20">
              <h2 className="text-3xl font-[var(--font-paragraph)] mb-2">
                Nothing Found
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Sorry, but nothing matched your filter terms. Please try again
                with different keywords.
              </p>
            </div>
          )}
        </div>
        <NewsSideBar contacts={contacts} />
      </div>
    </div>
  );
};

export default NewsBlogs;
