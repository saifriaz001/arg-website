import React, { useState, useMemo } from "react";
import ServiceDropdown from "../ReuseableComponents/ServiceDropDown";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import NavButton from '../ReuseableComponents/NavButton';
import ButtonWithArrow from "./ButtonWithArrow";


const ReadMoreButton = ({ to }) => (
  <Link
    to={to}
    className="inline-flex items-center gap-1 text-green-700 border border-green-500 px-4 py-1.5 rounded-full font-medium transition group hover:bg-green-700 hover:text-white"
  >
    <span>Read more</span>
    <span className="transform transition-transform duration-900 group-hover:translate-x-1">
      &rarr;
    </span>
  </Link>
);

const PressReleasePage = ({
    heading,
    paragraphLg,
    paragraphSm,
    prefixPath,
    data,
    filters = [],
    defaultOption = "All",
}) => {
    const [selectedFilterType, setSelectedFilterType] = useState(defaultOption);
    const [selectedCategory, setSelectedCategory] = useState("");

    // Normalize types -> ensure title exists
    const normalizedData = useMemo(() => {
        const mapped = data.map((item) => ({
            ...item,
            types: Array.isArray(item.types)
                ? item.types.map((t) => ({
                    ...t,
                    title: t.type || t.title || "",
                }))
                : [],
        }));

        return mapped;
    }, [data]);

    // Extract unique dropdown options
    const getUniqueOptions = (data, key) => {
        if (key === "year") {
            const years = data.map((item) =>
                new Date(item.date || item.createdAt).getFullYear()
            );
            return [...new Set(years)].sort().map((y) => ({ title: y.toString() }));
        }

        const allValues = data.flatMap((item) => {
            const value = item[key];

            if (Array.isArray(value)) {
                return value.map((v) => {
                    if (typeof v === "object" && v !== null) {
                        return v.title || v.type || "";
                    }
                    return v;
                });
            }

            if (typeof value === "object" && value !== null) {
                return value.title || value.type || "";
            }

            return value;
        });

        const unique = [...new Set(allValues)]
            .filter(Boolean)
            .map((v) => ({ title: v }));
        return unique;
    };

    // Filter logic
    const filteredData = useMemo(() => {
        if (selectedFilterType === defaultOption || selectedCategory === "")
            return normalizedData;

        return normalizedData.filter((item) => {
            const value =
                selectedCategory === "year"
                    ? new Date(item.date || item.createdAt).getFullYear().toString()
                    : item[selectedCategory];

            if (Array.isArray(value))
                return value.some((v) => (v.title || v.type) === selectedFilterType);
            if (typeof value === "object" && value !== null)
                return (value.title || value.type) === selectedFilterType;
            return value === selectedFilterType;
        });
    }, [normalizedData, selectedFilterType, selectedCategory, defaultOption]);

    return (
        <div>
            <div className="  News h-[300px] w-full">
  <div className="max-w-7xl h-full mx-auto flex items-center px-6">
    <h1 className="text-4xl text-white font-semibold">{heading || "Press Releases"}</h1>
  </div>
</div>
            <section className="section-layout">
                <div className="max-w-7xl mx-auto">
                    {/* Heading + Intro */}

                    {/* Dropdown Filters */}
                    <div className="flex flex-wrap gap-4 mt-4 mb-6">
                        {filters.map((filter) => (
                            <ServiceDropdown
                                services={getUniqueOptions(normalizedData, filter.key)}
                                selected={
                                    selectedCategory === filter.key
                                        ? selectedFilterType
                                        : defaultOption
                                }
                                setSelected={(value) => {
                                    setSelectedFilterType(value);
                                    setSelectedCategory(filter.key);
                                }}
                                text={filter.label}
                                option={defaultOption}
                            />
                        ))}
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredData.map((item, idx) => {
                            const date = new Date(item.date || item.createdAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            });

                            const types = item.types || [];
                            const shortDesc = item.description?.split("\n")[0]?.substring(0, 250) + "...";
                            const getShortHeading = (title, maxLength = 100) => {
                                return title.length > maxLength
                                    ? title.substring(0, maxLength) + "..."
                                    : title;
                            };

                            return (
                                <div
                                    key={idx}
                                    className="border-b pb-6 flex flex-col justify-between min-h-[300px]" // ✅ Ensure consistent height and layout
                                >
                                    <div>
                                        <div className="flex items-center News-date">
                                            <FaRegCalendarAlt size={20} className="mr-2 font-bold" />
                                            <div className="mt-0.5">{date.toUpperCase()}</div>
                                        </div>

                                        <h2 className="News-heading">
                                            <Link to={`/${prefixPath}/${item.slug}`}>
                                                {getShortHeading(item.title)}
                                            </Link>
                                        </h2>

                                        {types.length > 0 && (
                                            <div className="flex gap-2 mb-1">
                                                {types.map((type, i) => (
                                                    <span key={i} className="News-type">
                                                        {type.title}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <p className="Project-service-description">{shortDesc}</p>
                                    </div>

                                    {/* ✅ Always pinned to bottom */}
                                    <div className="mt-auto pt-4">
                                        <ButtonWithArrow to={`/${prefixPath}/${item.slug}`} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PressReleasePage;
