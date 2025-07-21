import React from 'react';

const ServiceDropdown = ({ option ,text, services, selected, setSelected }) => {
  return (
    <div className="w-full flex flex-col  lg:flex-row justify-center items-center md:w-[400px] mb-6">
      <label className="w-full text-gray-600 text-sm mb-1">{text}</label>
      <select
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option>{option}</option>
        {services.map((s, idx) => (
          <option key={idx}>{s.title}</option>
        ))}
      </select>
    </div>
  );
};

export default ServiceDropdown;
