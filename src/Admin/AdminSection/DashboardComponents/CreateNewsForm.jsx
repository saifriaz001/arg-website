import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getMarkets } from '../../Endpoints/MarketsAPI';
import { getServices } from '../../Endpoints/ServicesAPI';
import { getTypes } from '../../Endpoints/TypesAPI'; // Assuming you have this
import { postNews } from '../../Endpoints/NewsAPI';
import ImageKitUploader from '../../ReuseableComponents/ImageKitUploader'; // Or your image uploader

const CreateNewsForm = () => {
  const [typesOptions, setTypesOptions] = useState([]);
  const [marketsOptions, setMarketsOptions] = useState([]);
  const [servicesOptions, setServicesOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [typesRes, marketsRes, servicesRes] = await Promise.all([
        getTypes(), getMarkets(), getServices()
      ]);
      setTypesOptions(
        (typesRes?.data || []).map((t) => ({ value: t._id, label: t.type }))
      );
      setMarketsOptions(
        (marketsRes?.data || []).map((m) => ({ value: m._id, label: m.title }))
      );
      setServicesOptions(
        (servicesRes?.data || []).map((s) => ({ value: s._id, label: s.title }))
      );
    };
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      types: [],
      markets: [],
      services: [],
      date: new Date(),
      imageUrl: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
      types: Yup.array().min(1, 'Select at least one type'),
      markets: Yup.array().min(1, 'Select at least one market'),
      services: Yup.array().min(1, 'Select at least one service'),
      date: Yup.date().required('Date is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const payload = {
          title: values.title,
          description: values.description,
          types: values.types.map((t) => t.value),
          markets: values.markets.map((m) => m.value),
          services: values.services.map((s) => s.value),
          date: values.date.toISOString().split('T')[0],
          imageUrl: values.imageUrl || '',
        };

        await postNews(
          payload.title,
          payload.description,
          payload.types,
          payload.markets,
          payload.services,
          payload.date,
          payload.imageUrl
        );

        alert('✅ News created successfully!');
        resetForm();
      } catch (error) {
        console.error('❌ Failed to submit news:', error);
        alert('❌ Failed to submit news.');
      }
    }
  });

  const handleImageUpload = (url) => {
    formik.setFieldValue('imageUrl', url);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-semibold">Create News</h2>

      {/* Title */}
      <input
        name="title"
        placeholder="Title"
        onChange={formik.handleChange}
        value={formik.values.title}
        className="w-full border px-4 py-2 rounded"
      />
      {formik.touched.title && formik.errors.title && (
        <div className="text-red-500 text-sm">{formik.errors.title}</div>
      )}

      {/* Description */}
      <textarea
        name="description"
        placeholder="Description"
        onChange={formik.handleChange}
        value={formik.values.description}
        className="w-full border px-4 py-2 rounded"
      />
      {formik.touched.description && formik.errors.description && (
        <div className="text-red-500 text-sm">{formik.errors.description}</div>
      )}

      {/* Types */}
      <label className="font-semibold">Types</label>
      <Select
        isMulti
        options={typesOptions}
        value={formik.values.types}
        onChange={(value) => formik.setFieldValue('types', value)}
      />
      {formik.touched.types && formik.errors.types && (
        <div className="text-red-500 text-sm">{formik.errors.types}</div>
      )}

      {/* Markets */}
      <label className="font-semibold">Markets</label>
      <Select
        isMulti
        options={marketsOptions}
        value={formik.values.markets}
        onChange={(value) => formik.setFieldValue('markets', value)}
      />
      {formik.touched.markets && formik.errors.markets && (
        <div className="text-red-500 text-sm">{formik.errors.markets}</div>
      )}

      {/* Services */}
      <label className="font-semibold">Services</label>
      <Select
        isMulti
        options={servicesOptions}
        value={formik.values.services}
        onChange={(value) => formik.setFieldValue('services', value)}
      />
      {formik.touched.services && formik.errors.services && (
        <div className="text-red-500 text-sm">{formik.errors.services}</div>
      )}

      {/* Date Picker */}
      <label className="font-semibold">Date</label>
      <DatePicker
        selected={formik.values.date}
        onChange={(date) => formik.setFieldValue('date', date)}
        dateFormat="dd MMMM yyyy"
        className="w-full border px-4 py-2 rounded"
      />

      {/* Image Upload (Optional) */}
      <ImageKitUploader onUpload={handleImageUpload} label="Optional Image" />

      {formik.values.imageUrl && (
        <img src={formik.values.imageUrl} alt="preview" className="h-32 rounded mt-2" />
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit News
      </button>
    </form>
  );
};

export default CreateNewsForm;
