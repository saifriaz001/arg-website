import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ImageKitUploader from '../../ReuseableComponents/ImageKitUploader';
import { postService } from "../../Endpoints/ServicesAPI";

const CreateServiceForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      heading: '',
      description: '',
      imageUrl: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      heading: Yup.string()
        .min(3, 'Heading must be at least 3 characters')
        .required('Heading is required'),
      description: Yup.string()
        .min(3, 'Description must be at least 3 characters')
        .required('Description is required'),
    }),
    onSubmit: async (values) => {
      try {
        await postService(
          values.title,
          values.heading,
          values.description,
          values.imageUrl
        );
        console.log('✅ Service posted successfully');
        formik.resetForm();
      } catch (error) {
        console.error('❌ Error posting service:', error);
        alert('Something went wrong while submitting the form.');
      }
    }
  });

  const handleImageUpload = (url) => {
    formik.setFieldValue('imageUrl', url);
  };

  const isBasicInfoFilled =
    formik.values.title.trim() &&
    formik.values.heading.trim() &&
    formik.values.description.trim();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-page-background space-y-4 p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md"
    >
      <h1 className="heading-title">SERVICES</h1>

      <div className='h-18'>
        <label className="paragraph-lg">Title</label>
        <input
          type="text"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          placeholder="Title"
          className="w-full border px-4 py-2 "
        />
        {formik.touched.title && formik.errors.title && (
          <div className="error-text">{formik.errors.title}</div>
        )}
      </div>

      <div className='h-20'>
        <label className="paragraph-lg">Heading</label>
        <input
          type="text"
          name="heading"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.heading}
          placeholder="Heading"
          className="w-full border px-4 py-2 rounded"
        />
        {formik.touched.heading && formik.errors.heading && (
          <div className="error-text ">{formik.errors.heading}</div>
        )}
      </div>

      <div className=' h-30'>
        <label className="paragraph-lg">Description</label>
        <textarea
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          placeholder="Description"
          className="w-full border px-4 py-2 rounded"
        />
        {formik.touched.description && formik.errors.description && (
          <div className="error-text">{formik.errors.description}</div>
        )}
      </div>

      <ImageKitUploader
        disabled={!isBasicInfoFilled}
        onUpload={handleImageUpload}
        label="Service Image"
      />

      {formik.values.imageUrl && (
        <img
          src={formik.values.imageUrl}
          alt="Preview"
          className="h-32 object-cover mt-2 rounded"
        />
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateServiceForm;
