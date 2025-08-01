import React, { useEffect, useState } from 'react';
import ReusableTanTable from '../../ReuseableComponents/ReusableTanTable';
import { getProjects, deleteProject } from '../../Endpoints/ProjectArrayAPI';

const ProjectsArrayTable = () => {
  const [projects, setProjects] = useState([]);
  const [projectArrayId, setProjectArrayId] = useState(null); // Track the whole ProjectArray ID

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res?.data?.projects || []);
      setProjectArrayId(res?.data?._id || null);
    } catch (err) {
      console.error('❌ Error fetching projects:', err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async () => {
    if (!window.confirm('Delete all projects in the navbar?')) return;
    try {
      await deleteProject(projectArrayId);
      setProjects([]);
      setProjectArrayId(null);
    } catch (err) {
      console.error('❌ Error deleting project array:', err);
      alert('Failed to delete project array');
    }
  };

  // Show just one row in the table
  const singleRowData = [
    {
      _id: projectArrayId,
      title: projects.map(p => p.title).join(', '), // Titles as a single string
    },
  ];

  const columns = [
    {
      accessorKey: 'title',
      header: 'Project Titles',
      cell: info => (
        <div className="whitespace-pre-wrap max-w-3xl">{info.getValue()}</div>
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
      <h2 className="text-xl font-bold mb-4">Navbar Project Array</h2>
      <ReusableTanTable columns={columns} data={singleRowData} />
    </div>
  );
};

export default ProjectsArrayTable;
