// pages/ProjectsTable.jsx
import React, { useEffect, useState } from 'react';
import ReusableTanTable from '../../ReuseableComponents/ReusableTanTable';
import { getProjects, deleteProject } from '../../Endpoints/ProjectAPI';

const ProjectsTable = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res?.data || []);
    } catch (err) {
      console.error('❌ Error fetching projects:', err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this project?')) return;
    try {
      await deleteProject(id);
      fetchProjects();
    } catch (err) {
      console.error('❌ Error deleting project:', err);
      alert('Failed to delete project');
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
      cell: info => (
        <div className="truncate max-w-xs">{info.getValue()}</div>
      ),
    },
    {
      accessorKey: 'imageUrl',
      header: 'Image',
      cell: ({ getValue }) =>
        getValue() ? (
          <img src={getValue()} alt="Project" className="w-12 h-12 object-cover rounded" />
        ) : (
          'N/A'
        ),
    },
    {
      accessorKey: 'market',
      header: 'Markets',
      cell: info => {
        const mk = info.getValue();
        // if populated array of objects
        if (Array.isArray(mk)) return mk.map(m => m.title || m).join(', ');
        // otherwise assume array of IDs
        return Array.isArray(mk) ? mk.join(', ') : mk;
      }
    },
    {
      accessorKey: 'services',
      header: 'Services',
      cell: info => {
        const sv = info.getValue();
        if (Array.isArray(sv)) return sv.map(s => s.title || s).join(', ');
        return Array.isArray(sv) ? sv.join(', ') : sv;
      }
    },
    {
      accessorKey: 'country',
      header: 'Country',
    },
    {
      accessorKey: 'state',
      header: 'State',
    },
    {
      accessorKey: 'city',
      header: 'City',
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
      <h2 className="text-xl font-bold mb-4">Project List</h2>
      {console.log("i am here ")}
      <ReusableTanTable columns={columns} data={projects} />
    </div>
  );
};

export default ProjectsTable;
