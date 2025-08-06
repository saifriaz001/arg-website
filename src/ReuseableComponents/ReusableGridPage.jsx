import React, { useState , useMemo } from 'react';
import ServiceDropdown from '../ReuseableComponents/ServiceDropDown';
import { Link } from 'react-router-dom';
import LoadMoreToggle from './LoadMoreToggle';
const ReusableGridPage = ({
  heading,
  paragraphLg,
  paragraphSm,
  prefixPath,
  data,
  filters = [],
  defaultOption = 'All',
}) => {
  const [selectedFilterType, setSelectedFilterType] = useState(defaultOption);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);
    // Helper to extract unique values from array
  const getUniqueOptions = (data, key) => {
    const allValues = data.flatMap((item) => {
      const value = item[key];
      if (Array.isArray(value)) return value.map((v) => v.title);
      if (typeof value === 'object' && value !== null) return value.title;
      return value;
    });
    return [...new Set(allValues)].filter(Boolean).map((v) => ({ title: v }));
  };

  const filteredData = useMemo(() => {
    if (selectedFilterType === defaultOption || selectedCategory === '') return data;

    return data.filter((item) => {
      const value = item[selectedCategory];
      if (Array.isArray(value)) return value.some((v) => v.title === selectedFilterType);
      if (typeof value === 'object' && value !== null) return value.title === selectedFilterType;
      return value === selectedFilterType;
    });
  }, [data, selectedFilterType, selectedCategory, defaultOption]);


  return (
    <section className="section-layout">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="heading-title">{heading}</h1>

        {/* Intro */}
        {paragraphLg && <p className="paragraph-lg">{paragraphLg}</p>}
        {paragraphSm && <p className="paragraph-sm">{paragraphSm}</p>}

        {/* Dropdown */}

        <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-4 mb-6">
          {filters.map((filter) => (
            <ServiceDropdown
              key={filter.key}
              services={getUniqueOptions(data, filter.key)}
              selected={selectedCategory === filter.key ? selectedFilterType : defaultOption}
              setSelected={(value) => {
                setSelectedFilterType(value);
                setSelectedCategory(filter.key);
              }}
              text={filter.label}
              option={defaultOption}
            />
          ))}
        </div>


        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {filteredData.slice(0, visibleCount).map((item, idx) => (
            <Link to={`/${prefixPath}/${item.slug}`} className="block h-full w-full" key={idx}>
              <div className="relative group h-64 overflow-hidden shadow-md">
                <img
                  loading="lazy"
                  src={item.image || item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover brightness-50 transform group-hover:brightness-100 transition duration-1000 ease-in-out group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h4 className="title">{item.title}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <LoadMoreToggle
          visibleCount={visibleCount}
          totalCount={filteredData.length}
          increment={6}
          setVisibleCount={setVisibleCount}
        />
      </div>
    </section>
  );
};

export default ReusableGridPage;