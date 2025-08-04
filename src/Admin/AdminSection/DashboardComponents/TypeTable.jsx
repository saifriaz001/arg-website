// pages/TypeTable.jsx
import React, { useEffect, useState } from 'react';
import ReusableTanTable from '../../ReuseableComponents/ReusableTanTable';
import { getTypes, deleteType } from '../../Endpoints/TypesAPI';

const TypeTable = () => {
  const [types, setTypes] = useState([]);

  const fetchTypes = async () => {
    try {
      const res = await getTypes();
      setTypes(res?.data || []);
    } catch (err) {
      console.error("❌ Error fetching types:", err);
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this type?")) return;
    try {
      await deleteType(id);
      fetchTypes(); // Reload after delete
    } catch (err) {
      console.error("❌ Error deleting type:", err);
    }
  };

  const columns = [
    {
      accessorKey: 'type',
      header: 'Type Name',
    },
    {
      header: 'Actions',
      cell: ({ row }) => (
        <button
          onClick={() => handleDelete(row.original._id)}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Types</h2>
      <ReusableTanTable columns={columns} data={types} />
    </div>
  );
};

export default TypeTable;
