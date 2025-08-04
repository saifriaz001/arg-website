import React, { useEffect, useState } from 'react';
import ReusableTanTable from '../../ReuseableComponents/ReusableTanTable';
import { getNews, deleteNews } from '../../Endpoints/NewsAPI';

const NewsTable = () => {
  const [newsList, setNewsList] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await getNews();
      setNewsList(res?.data || []);
    } catch (err) {
      console.error("❌ Error fetching news:", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this news item?")) return;
    try {
      await deleteNews(id);
      fetchNews(); // refresh
    } catch (err) {
      console.error("❌ Error deleting news:", err);
    }
  };

  const columns = [
    {
      accessorKey: 'title',
      header: 'Title',
    },
    {
      accessorKey: 'description',
      header: 'Description',
    },
    {
      accessorKey: 'types',
      header: 'Types',
      cell: ({ getValue }) =>
        (getValue() || []).map(t => t?.type || t).join(', '),
    },
    {
      accessorKey: 'markets',
      header: 'Markets',
      cell: ({ getValue }) =>
        (getValue() || []).map(m => m?.title || m).join(', '),
    },
    {
      accessorKey: 'services',
      header: 'Services',
      cell: ({ getValue }) =>
        (getValue() || []).map(s => s?.title || s).join(', '),
    },
    {
      accessorKey: 'date',
      header: 'Date',
    },
    {
      accessorKey: 'imageUrl',
      header: 'Image',
      cell: ({ getValue }) =>
        getValue() ? (
          <img src={getValue()} alt="News" className="w-12 h-12 rounded" />
        ) : (
          'N/A'
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
      <h2 className="text-xl font-bold mb-4">News List</h2>
      <ReusableTanTable columns={columns} data={newsList} />
    </div>
  );
};

export default NewsTable;
