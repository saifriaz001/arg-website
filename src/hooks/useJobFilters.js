import { useState, useEffect, useMemo } from "react";
import { filterCategories } from "../utils/importantConstants";
import { getJobs } from "../Admin/Endpoints/JobsAPI";
import { useDebounce } from "./useDebounce";

export const useJobFilters = () => {
  const [allJobs, setAllJobs] = useState([]);

  const [activeFilters, setActiveFilters] = useState({});
  const [filteredJobs, setFilteredJobs] = useState(allJobs);
  const [keywordSearch, setKeywordSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  // for search button commit
  const [committedKeyword, setCommittedKeyword] = useState("");
  const [committedLocation, setCommittedLocation] = useState("");
  // for input debouncing search without search button
  const debouncedKeyword = useDebounce(keywordSearch, 500);
  const debouncedLocation = useDebounce(locationSearch, 500);

  useEffect(() => {
    const fetchAndSetJobs = async () => {
      try {
        const jobsFromAPI = await getJobs();
        if (Array.isArray(jobsFromAPI)) {
          setAllJobs(jobsFromAPI);
          setFilteredJobs(jobsFromAPI); // Initially, show all jobs
        } else {
          console.error("Fetched data is not an array:", jobsFromAPI);
        }
      } catch (error) {
        console.error("❌ Failed to fetch jobs:", error);
      }
    };
    fetchAndSetJobs();
  }, []);

  useEffect(() => {
    let jobsResult = [...allJobs];

    // Filter by sidebar selections
    if (Object.keys(activeFilters).length > 0) {
      jobsResult = jobsResult.filter((job) =>
        Object.entries(activeFilters).every(([key, value]) => {
          const jobKey =
            key.charAt(0).toLowerCase() + key.slice(1).replace(" ", "");
          return job[jobKey] === value;
        })
      );
    }

    // Filter by committed keyword
    if (debouncedKeyword.trim() !== "") {
      const lowercasedKeyword = debouncedKeyword.toLowerCase();
      jobsResult = jobsResult.filter(
        (job) =>
          (job.title && job.title.toLowerCase().includes(lowercasedKeyword)) ||
          (job.careerArea &&
            job.careerArea.toLowerCase().includes(lowercasedKeyword)) ||
          (job.businessLine &&
            job.businessLine.toLowerCase().includes(lowercasedKeyword))
      );
    }

    // Filter by committed location
    if (debouncedLocation.trim() !== "") {
      const lowercasedLocation = debouncedLocation.toLowerCase();
      jobsResult = jobsResult.filter(
        (job) =>
          (job.city && job.city.toLowerCase().includes(lowercasedLocation)) ||
          (job.state && job.state.toLowerCase().includes(lowercasedLocation)) ||
          (job.country &&
            job.country.toLowerCase().includes(lowercasedLocation))
      );
    }

    setFilteredJobs(jobsResult);
  }, [activeFilters, debouncedKeyword, debouncedLocation, allJobs]);

  const handleAddFilter = (category, value) => {
    const newFilters = { ...activeFilters };
    const categoryKey = category.replace("Filter by ", "");
    if (categoryKey === "City") {
      delete newFilters.State;
      delete newFilters.Country;
    } else if (categoryKey === "State") {
      delete newFilters.City;
    }
    newFilters[categoryKey] = value;
    setActiveFilters(newFilters);
  };

  const handleRemoveFilter = (categoryToRemove) => {
    const newFilters = { ...activeFilters };
    delete newFilters[categoryToRemove];
    setActiveFilters(newFilters);
  };

  const handleSearch = () => {
    setCommittedKeyword(keywordSearch);
    setCommittedLocation(locationSearch);
  };

  const handleClearAll = () => {
    setActiveFilters({});
    setKeywordSearch("");
    setLocationSearch("");
    setCommittedKeyword("");
    setCommittedLocation("");
  };

  const generateFilterOptions = (jobs, key) => {
    const counts = jobs.reduce((acc, job) => {
      const value = job[key];
      if (value) acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(counts)
      .map((name) => ({ name, count: counts[name] }))
      .sort((a, b) => b.count - a.count);
  };

  const dynamicFilterData = useMemo(
    () =>
      filterCategories.map((category) => ({
        ...category,
        options: generateFilterOptions(filteredJobs, category.key),
      })),
    [filteredJobs]
  );

  const getVisibleFilterGroups = () => {
    const activeKeys = Object.keys(activeFilters);
    let hiddenGroups = [...activeKeys];
    if (activeKeys.includes("City")) hiddenGroups.push("State", "Country");
    else if (activeKeys.includes("State")) hiddenGroups.push("Country");
    return dynamicFilterData.filter(
      (group) => !hiddenGroups.includes(group.title.replace("Filter by ", ""))
    );
  };

  return {
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
  };
};
