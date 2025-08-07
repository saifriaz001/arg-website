import React, { useState, useEffect } from "react";
import "../yahya-css/careers.css";
import { useJobFilters } from "../hooks/useJobFilters";
import CareerHero from "../CareerComponents/CareerHero";
import SearchBar from "../CareerComponents/SearchBar";
import Sidebar from "../CareerComponents/Sidebar";
import JobListing from "../CareerComponents/JobListing";


const JOBS_PER_PAGE = 5;

const Careers = () => {
  const [visibleJobsCount, setVisibleJobsCount] = useState(JOBS_PER_PAGE);

  const {
    filteredJobs,
    activeFilters,
    keywordSearch,
    setKeywordSearch,
    locationSearch,
    setLocationSearch,
    handleSearch,
    handleAddFilter,
    handleRemoveFilter,
    handleClearAll,
    getVisibleFilterGroups,
  } = useJobFilters();

  const handleLoadMore = () => {
    setVisibleJobsCount((prevCount) => prevCount + JOBS_PER_PAGE);
  };
  const handleShowLess = () => {
    setVisibleJobsCount(JOBS_PER_PAGE);
  };

  // When filters change, reset pagination
  useEffect(() => {
    setVisibleJobsCount(JOBS_PER_PAGE);
  }, [filteredJobs]);

  return (
    <div className="career-container">
      <CareerHero />
      <SearchBar
        keyword={keywordSearch}
        onKeywordChange={setKeywordSearch}
        location={locationSearch}
        onLocationChange={setLocationSearch}
        onSearch={handleSearch}
        onClear={handleClearAll}
      />
      <div className="job-search-section">
        <div className="jobs-main-content">
          <Sidebar
            activeFilters={activeFilters}
            onRemoveFilter={handleRemoveFilter}
            onClearAll={handleClearAll}
            visibleFilterGroups={getVisibleFilterGroups()}
            onSelectFilter={handleAddFilter}
          />
          <JobListing
            jobs={filteredJobs}
            visibleCount={visibleJobsCount}
            onLoadMore={handleLoadMore}
            onShowLess={handleShowLess}
          />
        </div>
      </div>
    </div>
  );
};

export default Careers;
