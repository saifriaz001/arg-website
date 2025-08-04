import React from "react";
import ActiveFilters from "./ActiveFilters";
import FilterGroup from "./FilterGroup";
import ConnectCard from "./ConnectCard";
import { connectCardData } from "../utils/importantConstants";

const Sidebar = ({
  activeFilters,
  onRemoveFilter,
  onClearAll,
  visibleFilterGroups,
  onSelectFilter,
}) => (
  <aside className="order-2 md:order-none">
    <ActiveFilters
      activeFilters={activeFilters}
      onRemove={onRemoveFilter}
      onClearAll={onClearAll}
    />
    {visibleFilterGroups.map((filter) => (
      <FilterGroup
        key={filter.title}
        title={filter.title}
        options={filter.options}
        onSelectFilter={onSelectFilter}
      />
    ))}
    {/* {connectCardData.map((card, index) => (
      <ConnectCard key={index} title={card.title} buttons={card.buttons} />
    ))} */}
  </aside>
);

export default Sidebar;
