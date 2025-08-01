// MarketTable.jsx
import React, { useEffect, useState } from 'react';
import ReusableTanTable from '../../ReuseableComponents/ReusableTanTable';
import { getMarkets } from '../../Endpoints/MarketsAPI';
import { deleteMarket } from '../../Endpoints/MarketsAPI'; // your delete API

const MarketTable = () => {
  const [markets, setMarkets] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getMarkets();
      setMarkets(res.data); // Adjust this if your response structure is different
    } catch (err) {
      console.error("❌ Failed to fetch markets:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this market?")) return;
    try {
      await deleteMarket(id);
      fetchData(); // Refresh table after deletion
    } catch (err) {
      console.error("❌ Failed to delete market:", err);
    }
  };

  const columns = [
    {
      accessorKey: 'title',
      header: 'Title',
    },
    {
      accessorKey: 'heading',
      header: 'Heading',
    },
    {
      accessorKey: 'description',
      header: 'Description',
    },
    {
      accessorKey: 'imageUrl',
      header: 'Image',
      cell: info => (
        <img src={info.getValue()} alt="Market" className="h-12 w-12 object-cover rounded" />
      ),
    },
    {
      header: 'Actions',
      cell: ({ row }) => (
        <button
          onClick={() => handleDelete(row.original._id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Market List</h2>
      <ReusableTanTable columns={columns} data={markets} />
    </div>
  );
};

export default MarketTable;
