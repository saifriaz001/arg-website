import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Select from 'react-select';
import { getProjects } from '../../Endpoints/ProjectAPI';
import { postProjects } from '../../Endpoints/ProjectArrayAPI'; // adjust if needed

const ProjectArrayForm = () => {
  const [projectOptions, setProjectOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  // ⬇️ Load projects for select
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        const options = res.data.map(project => ({
          value: project._id,
          label: project.title,
        }));
        setProjectOptions(options);
        setLoading(false);
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const formik = useFormik({
    initialValues: {
      projects: [],
    },
    onSubmit: async (values) => {
      try {
        const projects = values.projects.map(p => p.value);
        console.log("printing ProjectsId ->", projects)
        await postProjects(projects);
        alert('Projects saved to navbar!');
        formik.resetForm();
      } catch (err) {
        console.error('Failed to save project array:', err);
      }
    },
  });

  return (
    <div className="p-4 max-w-xl mx-auto border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Select Projects for Navbar</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium mb-1">Projects</label>
          <Select
            isMulti
            options={projectOptions}
            isLoading={loading}
            value={formik.values.projects}
            onChange={(selectedOptions) => formik.setFieldValue('projects', selectedOptions)}
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProjectArrayForm;
