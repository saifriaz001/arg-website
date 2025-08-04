import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {postType} from "../../Endpoints/TypesAPI"// Adjust import as per your structure

const CreateTypeForm = () => {
  const formik = useFormik({
    initialValues: {
      type: '',
    },
    validationSchema: Yup.object({
      type: Yup.string().trim().required('Type is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await postType(values.type);
        alert('✅ Type created successfully!');
        resetForm();
      } catch (error) {
        alert('❌ Failed to create type');
        console.error(error);
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6"
    >
      <h2 className="text-xl font-semibold mb-4">Create New Type</h2>

      <label htmlFor="type" className="block mb-2 font-medium">
        Type
      </label>
      <input
        id="type"
        name="type"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.type}
        placeholder="Enter type name"
        className="w-full border border-gray-300 rounded px-4 py-2"
      />
      {formik.touched.type && formik.errors.type && (
        <p className="text-red-500 text-sm mt-1">{formik.errors.type}</p>
      )}

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateTypeForm;
