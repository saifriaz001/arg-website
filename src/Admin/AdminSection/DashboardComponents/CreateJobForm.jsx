import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import { postJob } from "../../Endpoints/JobsAPI";

const CreateJobForm = ({ onJobCreated }) => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  const workLocationOptions = [
    { value: "On-site", label: "On-site" },
    { value: "Remote", label: "Remote" },
    { value: "Hybrid", label: "Hybrid" },
  ];

  useEffect(() => {
    const countries = Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountryOptions(countries);
  }, []);

  const initialValues = {
    title: "",
    description: "",
    qualifications: "",
    minRequirements: "",
    businessLine: "",
    careerArea: "",
    workLocation: null,
    country: null,
    state: null,
    city: null,
    applyFormLink: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .max(100, "Title must be 100 characters or less")
      .required("Title is required"),
    description: Yup.string().required("Description is required"),
    qualifications: Yup.string().required("Qualifications are required"),
    minRequirements: Yup.string().required("Minimum requirements are required"),
    businessLine: Yup.string().required("Business Line is required"),
    careerArea: Yup.string().required("Career Area is required"),
    workLocation: Yup.object().nullable().required("Work Location is required"),
    country: Yup.object().nullable().required("Country is required"),
    state: Yup.object().nullable().required("State is required"),
    city: Yup.object().nullable().required("City is required"),
    applyFormLink: Yup.string()
      .url("Must be a valid URL")
      .required("Apply link is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const payload = {
        title: values.title,
        country: values.country.label,
        state: values.state.label,
        city: values.city.label,
        businessLine: values.businessLine,
        careerArea: values.careerArea,
        description: String(values.description || ""),
        minRequirements: String(values.minRequirements || "")
          .split("\n")
          .filter((r) => r.trim() !== ""),
        qualifications: String(values.qualifications || "")
          .split("\n")
          .filter((q) => q.trim() !== ""),
        workLocation: values.workLocation.value,
        applyFormLink: values.applyFormLink,
      };

      await postJob(payload);

      alert("✅ Job created successfully!");
      resetForm();
      setStateOptions([]);
      setCityOptions([]);
      if (onJobCreated) {
        onJobCreated();
      }
    } catch (error) {
      console.error("❌ Failed to submit job:", error);
      alert("❌ Failed to submit job. Please check the console for details.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, setFieldTouched, isSubmitting }) => {
        useEffect(() => {
          if (values.country) {
            const states = State.getStatesOfCountry(values.country.value).map(
              (state) => ({ value: state.isoCode, label: state.name })
            );
            setStateOptions(states);
            setCityOptions([]);
            setFieldValue("state", null);
            setFieldValue("city", null);
          }
        }, [values.country, setFieldValue]);

        useEffect(() => {
          if (values.country && values.state) {
            const cities = City.getCitiesOfState(
              values.country.value,
              values.state.value
            ).map((city) => ({ value: city.name, label: city.name }));
            setCityOptions(cities);
            setFieldValue("city", null);
          }
        }, [values.country, values.state, setFieldValue]);

        return (
          <Form className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
              Create a New Job
            </h2>

            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Job Title
              </label>
              <Field
                id="title"
                name="title"
                type="text"
                placeholder="e.g., Lead Solutions Architect"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Job Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows="4"
                placeholder="Describe the role and responsibilities..."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* Minimum Requirements */}
            <div>
              <label
                htmlFor="minRequirements"
                className="block text-sm font-medium text-gray-700"
              >
                Minimum Requirements
              </label>
              <Field
                as="textarea"
                id="minRequirements"
                name="minRequirements"
                rows="4"
                placeholder="Enter one requirement per line. Each line will be a separate bullet point."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="minRequirements"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* Qualifications */}
            <div>
              <label
                htmlFor="qualifications"
                className="block text-sm font-medium text-gray-700"
              >
                Qualifications
              </label>
              <Field
                as="textarea"
                id="qualifications"
                name="qualifications"
                rows="4"
                placeholder="Enter one qualification per line. Each line will be a separate bullet point."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <ErrorMessage
                name="qualifications"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* Business Line & Career Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="businessLine"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Line
                </label>
                <Field
                  id="businessLine"
                  name="businessLine"
                  placeholder="e.g., Technology"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="businessLine"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="careerArea"
                  className="block text-sm font-medium text-gray-700"
                >
                  Career Area
                </label>
                <Field
                  id="careerArea"
                  name="careerArea"
                  placeholder="e.g., Software Development"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="careerArea"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
            </div>

            {/* Location Selectors (Custom components, so they don't use <Field>) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <Select
                  options={countryOptions}
                  value={values.country}
                  onChange={(option) => setFieldValue("country", option)}
                  onBlur={() => setFieldTouched("country", true)}
                  placeholder="Select Country"
                  className="mt-1"
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State / Province
                </label>
                <Select
                  options={stateOptions}
                  value={values.state}
                  onChange={(option) => setFieldValue("state", option)}
                  onBlur={() => setFieldTouched("state", true)}
                  placeholder="Select State"
                  isDisabled={!values.country || stateOptions.length === 0}
                  className="mt-1"
                />
                <ErrorMessage
                  name="state"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <Select
                  options={cityOptions}
                  value={values.city}
                  onChange={(option) => setFieldValue("city", option)}
                  onBlur={() => setFieldTouched("city", true)}
                  placeholder="Select City"
                  isDisabled={!values.state || cityOptions.length === 0}
                  className="mt-1"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
            </div>

            {/* Work Location & Apply Link */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Work Location
                </label>
                <Select
                  options={workLocationOptions}
                  value={values.workLocation}
                  onChange={(option) => setFieldValue("workLocation", option)}
                  onBlur={() => setFieldTouched("workLocation", true)}
                  placeholder="Select Work Location"
                  className="mt-1"
                />
                <ErrorMessage
                  name="workLocation"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="applyFormLink"
                  className="block text-sm font-medium text-gray-700"
                >
                  Application Link
                </label>
                <Field
                  id="applyFormLink"
                  name="applyFormLink"
                  type="url"
                  placeholder="https://example.com/apply"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="applyFormLink"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
            >
              {isSubmitting ? "Submitting..." : "Create Job"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateJobForm;
