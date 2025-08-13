import React, { useState, useEffect } from "react";
import "../yahya-css/careers.css";
import { useJobFilters } from "../hooks/useJobFilters";
import CareerHero from "../CareerComponents/CareerHero";
import SearchBar from "../CareerComponents/SearchBar";
import Sidebar from "../CareerComponents/Sidebar";
import JobListing from "../CareerComponents/JobListing";

const Careers = () => {
  const {
    filteredJobs,
    activeFilters,
    keywordSearch,
    setKeywordSearch,
    locationSearch,
    setLocationSearch,
    setCommittedKeyword,
    setCommittedLocation,
    handleSearch,
    handleAddFilter,
    handleRemoveFilter,
    handleClearAll,
    getVisibleFilterGroups,
  } = useJobFilters();

  return (
    <div className="career-container">
      <CareerHero />
      <SearchBar
        keyword={keywordSearch}
        onKeywordChange={setKeywordSearch}
        location={locationSearch}
        onLocationChange={setLocationSearch}
        onCommitKeyword={setCommittedKeyword}
        onCommitLocation={setCommittedLocation}
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
          <JobListing jobs={filteredJobs} />
        </div>
      </div>
    </div>
  );
};

export default Careers;
