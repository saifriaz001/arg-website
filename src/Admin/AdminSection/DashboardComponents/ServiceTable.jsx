// pages/ServiceTable.jsx
import React, { useEffect, useState } from 'react';
import ReusableTanTable from '../../ReuseableComponents/ReusableTanTable';
import { getServices , deleteService } from '../../Endpoints/ServicesAPI';


const ServiceTable = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const res = await getServices();
      setServices(res?.data || []);
    } catch (err) {
      console.error("❌ Error fetching services:", err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this service?")) return;
    try {
      await deleteService(id);
      fetchServices(); // reload data
    } catch (err) {
      console.error("❌ Error deleting service:", err);
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
      cell: ({ getValue }) => {
       const value = getValue() || '';
       const words = value.split(' ');
       const truncated = words.length > 10 ? words.slice(0, 10).join(' ') + '...' : value;
       return <span>{truncated}</span>;
  },
    },
    {
      accessorKey: 'description',
      header: 'Description',
      cell: ({ getValue }) => {
       const value = getValue() || '';
      const words = value.split(' ');
        const truncated = words.length > 10 ? words.slice(0, 10).join(' ') + '...' : value;
        return <span>{truncated}</span>;
  },
    },
    {
      accessorKey: 'imageUrl',
      header: 'Image',
      cell: ({ getValue }) => (
        <img src={getValue()} alt="Service" className="w-12 h-12 rounded object-cover" />
      ),
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
      <h2 className="text-xl font-bold mb-4">Service List</h2>
      <ReusableTanTable columns={columns} data={services} />
    </div>
  );
};

export default ServiceTable;
