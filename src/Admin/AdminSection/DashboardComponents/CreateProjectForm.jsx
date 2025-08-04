import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';
import { postProjects } from "../../Endpoints/ProjectAPI";
import { getMarkets } from '../../Endpoints/MarketsAPI';
import { getServices } from '../../Endpoints/ServicesAPI';
import ImageKitUploader from '../../ReuseableComponents/ImageKitUploader';


const CreateProjectForm = () => {
  const [markets, setMarkets] = useState([]);
  const [services, setServices] = useState([]);

  // Fetch dropdown data
  useEffect(() => {
    const fetchData = async () => {
      const [marketsRes, servicesRes] = await Promise.all([
        getMarkets(),
        getServices()
      ]);
      setMarkets(marketsRes?.data || []);
      setServices(servicesRes?.data || []);
    };
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: '',
      heading: '',
      description: '',
      imageUrl: '',
      market: [],
      services: [],
      country: null,
      state: null,
      city: null
    },
    onSubmit: async (values) => {
      const payload = {
        title: values.title,
        heading: values.heading,
        description: values.description,
        imageUrl: values.imageUrl,
        market: values.market.map((m) => m.value),        // ← instead of [values.market]
        services: values.services.map((s) => s.value),    // ← instead of [values.services]
        country: values.country?.name || '',
        state: values.state?.name || '',
        city: values.city?.name || ''

      };

      try {
        await postProjects(payload.title, payload.heading, payload.description, payload.imageUrl, payload.market, payload.services, payload.country, payload.state, payload.city);
        alert("✅ Project created successfully!");
        formik.resetForm();
      } catch (error) {
        console.error("❌ Error submitting project:", error);
        alert("❌ Failed to submit project.");
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

  const marketOptions = markets.map(m => ({
    label: m.title,
    value: m._id
  }));

  const serviceOptions = services.map(s => ({
    label: s.title,
    value: s._id,
    ...s
  }));

  // Country, State, City Options
  const countryOptions = Country.getAllCountries().map(c => ({
    label: c.name,
    value: c.isoCode,
    ...c
  }));

  const stateOptions = formik.values.country
    ? State.getStatesOfCountry(formik.values.country.isoCode).map(s => ({
      label: s.name,
      value: s.isoCode,
      ...s
    }))
    : [];

  const cityOptions = formik.values.state
    ? City.getCitiesOfState(
      formik.values.country.isoCode,
      formik.values.state.isoCode
    ).map(city => ({
      label: city.name,
      value: city.name,
      ...city
    }))
    : [];

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4 p-6 max-w-3xl mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-semibold">Create Project</h2>

      <input
        type="text"
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder="Title"
        className="w-full border px-4 py-2 rounded"
      />

      <input
        type="text"
        name="heading"
        onChange={formik.handleChange}
        value={formik.values.heading}
        placeholder="Heading"
        className="w-full border px-4 py-2 rounded"
      />

      <textarea
        name="description"
        onChange={formik.handleChange}
        value={formik.values.description}
        placeholder="Description"
        className="w-full border px-4 py-2 rounded"
      />

      {/* Market Dropdown */}
      <div>
        <label className="block font-semibold mb-1">Markets</label>
        <Select
          isMulti
          options={marketOptions}
          value={formik.values.market}
          onChange={(selected) => formik.setFieldValue("market", selected)}
          placeholder="Select Markets"
        />
      </div>

      {/* Services Dropdown */}
      <div>
        <label className="block font-semibold mb-1">Services</label>
        <Select
          isMulti
          options={serviceOptions}
          value={formik.values.services}
          onChange={(selected) => formik.setFieldValue("services", selected)}
          placeholder="Select Services"
        />
      </div>

      {/* Country Dropdown */}
      <div>
        <label className="block font-semibold mb-1">Country</label>
        <Select
          options={countryOptions}
          value={formik.values.country}
          onChange={(value) => {
            formik.setFieldValue("country", value);
            formik.setFieldValue("state", null);
            formik.setFieldValue("city", null);
          }}
          placeholder="Select Country"
        />
      </div>

      {/* State Dropdown */}
      <div>
        <label className="block font-semibold mb-1">State</label>
        <Select
          options={stateOptions}
          value={formik.values.state}
          onChange={(value) => {
            formik.setFieldValue("state", value);
            formik.setFieldValue("city", null);
          }}
          isDisabled={!formik.values.country}
          placeholder="Select State"
        />
      </div>

      {/* City Dropdown */}
      <div>
        <label className="block font-semibold mb-1">City</label>
        <Select
          options={cityOptions}
          value={formik.values.city}
          onChange={(value) => formik.setFieldValue("city", value)}
          isDisabled={!formik.values.state}
          placeholder="Select City"
        />
      </div>

      {/* Image Upload */}
      <ImageKitUploader
        onUpload={handleImageUpload}
        label="Project Image"
        disabled={!isBasicInfoFilled}
      />

      {/* Image Preview */}
      {formik.values.imageUrl && (
        <img
          src={formik.values.imageUrl}
          alt="Preview"
          className="h-32 mt-2 rounded object-cover"
        />
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Submit Project
      </button>
    </form>
  );
};

export default CreateProjectForm;
