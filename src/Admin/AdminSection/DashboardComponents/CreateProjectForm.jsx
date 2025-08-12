import React, { useEffect, useState } from "react";
import { useFormik, Field , FormikProvider } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import { postProject } from "../../Endpoints/ProjectAPI"; // <- use the object-based function
import { getMarkets } from "../../Endpoints/MarketsAPI";
import { getServices } from "../../Endpoints/ServicesAPI";
import ImageKitUploader from "../../ReuseableComponents/ImageKitUploader";

const CreateProjectForm = () => {
  const [markets, setMarkets] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    (async () => {
      const [marketsRes, servicesRes] = await Promise.all([getMarkets(), getServices()]);
      setMarkets(marketsRes?.data || []);
      setServices(servicesRes?.data || []);
    })();
  }, []);

  const marketOptions = markets.map((m) => ({ label: m.title, value: m._id }));
  const serviceOptions = services.map((s) => ({ label: s.title, value: s._id }));

  const validationSchema = Yup.object({
    title: Yup.string().trim().required("Title is required"),
    mainHeading: Yup.string().trim().min(3, "At least 3 characters").required("Main heading is required"),
    mainDescription: Yup.string().trim().min(10, "At least 10 characters").required("Main description is required"),
    imageUrl: Yup.string().url("Must be a valid URL").required("Image is required"),
    market: Yup.array().of(
      Yup.object({ label: Yup.string().required(), value: Yup.string().required() })
    ).min(1, "Select at least one market"),
    services: Yup.array().of(
      Yup.object({ label: Yup.string().required(), value: Yup.string().required() })
    ).min(1, "Select at least one service"),
    country: Yup.object().required("Country is required"),
    state: Yup.object().required("State is required"),
    city: Yup.object().required("City is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      mainHeading: "",
      mainDescription: "",
      imageUrl: "",
      market: [],
      services: [],
      country: null,
      state: null,
      city: null,
      // optional content fields if you expose them later:
      secondHeading: "",
      secondDescription: "",
      descriptionImageUrl: "",
      highlightsHeading: "",
      highlightsDescriptions: "", // comma-separated in UI if you decide to add it
      highlightsDescriptionImageUrl: ""
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const payload = {
        title: values.title,
        mainHeading: values.mainHeading,
        mainDescription: values.mainDescription,
        imageUrl: values.imageUrl,
        country: values.country?.name || "",
        state: values.state?.name || "",
        city: values.city?.name || "",
        market: values.market.map((m) => m.value),
        services: values.services.map((s) => s.value),
        // optional fields if needed:
        secondHeading: values.secondHeading || undefined,
        secondDescription: values.secondDescription || undefined,
        descriptionImageUrl: values.descriptionImageUrl || undefined,
        highlightsHeading: values.highlightsHeading || undefined,
        highlightsDescriptions: values.highlightsDescriptions
            .split("\n")
            .filter((line) => line.trim() !== "") || undefined,
        highlightsDescriptionImageUrl: values.highlightsDescriptionImageUrl || undefined,
      };

      try {
        await postProject(payload);
        alert("✅ Project created successfully!");
        resetForm();
      } catch (error) {
        console.error("❌ Error submitting project:", error);
        alert(error?.message || "❌ Failed to submit project.");
      }
    },
  });

  const stateOptions = formik.values.country
    ? State.getStatesOfCountry(formik.values.country.isoCode).map((s) => ({
      label: s.name,
      value: s.isoCode,
      ...s,
    }))
    : [];

  const cityOptions = formik.values.state
    ? City.getCitiesOfState(formik.values.country.isoCode, formik.values.state.isoCode).map((c) => ({
      label: c.name,
      value: c.name,
      ...c,
    }))
    : [];

  const isBasicInfoFilled =
    formik.values.title.trim() &&
    formik.values.mainHeading.trim() &&
    formik.values.mainDescription.trim();

  return (
    <FormikProvider value={formik}>
    <form onSubmit={formik.handleSubmit} className="space-y-4 p-6 max-w-3xl mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-semibold">Create Project</h2>

      <div>
        <Field
          type="text"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          placeholder="Title"
          className="w-full border px-4 py-2 rounded"
        />
        {formik.touched.title && formik.errors.title && <p className="text-red-600 text-sm">{formik.errors.title}</p>}
      </div>

      <div>
        <Field
          type="text"
          name="mainHeading"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mainHeading}
          placeholder="Main Heading"
          className="w-full border px-4 py-2 rounded"
        />
        {formik.touched.mainHeading && formik.errors.mainHeading && (
          <p className="text-red-600 text-sm">{formik.errors.mainHeading}</p>
        )}
      </div>

      <div>
        <Field
          as="textarea"
          name="mainDescription"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mainDescription}
          placeholder="Main Description"
          className="w-full border px-4 py-2 rounded"
        />
        {formik.touched.mainDescription && formik.errors.mainDescription && (
          <p className="text-red-600 text-sm">{formik.errors.mainDescription}</p>
        )}
      </div>

      {/* Market */}
      <div>
        <label className="block font-semibold mb-1">Markets</label>
        <Select
          isMulti
          options={marketOptions}
          value={formik.values.market}
          onChange={(selected) => formik.setFieldValue("market", selected)}
          onBlur={() => formik.setFieldTouched("market", true)}
          placeholder="Select Markets"
        />
        {formik.touched.market && formik.errors.market && (
          <p className="text-red-600 text-sm">{formik.errors.market}</p>
        )}
      </div>

      {/* Services */}
      <div>
        <label className="block font-semibold mb-1">Services</label>
        <Select
          isMulti
          options={serviceOptions}
          value={formik.values.services}
          onChange={(selected) => formik.setFieldValue("services", selected)}
          onBlur={() => formik.setFieldTouched("services", true)}
          placeholder="Select Services"
        />
        {formik.touched.services && formik.errors.services && (
          <p className="text-red-600 text-sm">{formik.errors.services}</p>
        )}
      </div>

      {/* Country */}
      <div>
        <label className="block font-semibold mb-1">Country</label>
        <Select
          options={Country.getAllCountries().map((c) => ({ label: c.name, value: c.isoCode, ...c }))}
          value={formik.values.country}
          onChange={(value) => {
            formik.setFieldValue("country", value);
            formik.setFieldValue("state", null);
            formik.setFieldValue("city", null);
          }}
          onBlur={() => formik.setFieldTouched("country", true)}
          placeholder="Select Country"
        />
        {formik.touched.country && formik.errors.country && (
          <p className="text-red-600 text-sm">{formik.errors.country}</p>
        )}
      </div>

      {/* State */}
      <div>
        <label className="block font-semibold mb-1">State</label>
        <Select
          options={stateOptions}
          value={formik.values.state}
          onChange={(value) => {
            formik.setFieldValue("state", value);
            formik.setFieldValue("city", null);
          }}
          onBlur={() => formik.setFieldTouched("state", true)}
          isDisabled={!formik.values.country}
          placeholder="Select State"
        />
        {formik.touched.state && formik.errors.state && (
          <p className="text-red-600 text-sm">{formik.errors.state}</p>
        )}
      </div>

      {/* City */}
      <div>
        <label className="block font-semibold mb-1">City</label>
        <Select
          options={cityOptions}
          value={formik.values.city}
          onChange={(value) => formik.setFieldValue("city", value)}
          onBlur={() => formik.setFieldTouched("city", true)}
          isDisabled={!formik.values.state}
          placeholder="Select City"
        />
        {formik.touched.city && formik.errors.city && (
          <p className="text-red-600 text-sm">{formik.errors.city}</p>
        )}
      </div>

      {/* Image */}
      <ImageKitUploader
        onUpload={(url) => formik.setFieldValue("imageUrl", url)}
        label="Project Image"
        disabled={!isBasicInfoFilled}
      />
      {formik.values.imageUrl && (
        <>
          <img src={formik.values.imageUrl} alt="Preview" className="h-32 mt-2 rounded object-cover" />
          {formik.touched.imageUrl && formik.errors.imageUrl && (
            <p className="text-red-600 text-sm">{formik.errors.imageUrl}</p>
          )}
        </>
      )}

      {/* Second Heading & Description */}
      <Field
        name="secondHeading"
        placeholder="Second Heading"
        className="w-full border px-4 py-2 rounded"
      />
      <Field
        as="textarea"
        name="secondDescription"
        placeholder="Second Description"
        rows={4}
        className="w-full border px-4 py-2 rounded"
      />

      {/* Description Image */}
      <ImageKitUploader
        onUpload={(url) => formik.setFieldValue("descriptionImageUrl", url)}
        label="Description Image"
      />
      {formik.values.descriptionImageUrl && (
        <img
          src={formik.values.descriptionImageUrl}
          alt="Desc Preview"
          className="h-32 object-cover mt-2 rounded"
        />
      )}

      {/* Highlights */}
      <Field
        name="highlightsHeading"
        placeholder="Highlights Heading"
        className="w-full border px-4 py-2 rounded"
      />
      <Field
        as="textarea"
        name="highlightsDescriptions"
        placeholder="Highlights (one per line)"
        rows={5}
        className="w-full border px-4 py-2 rounded"
      />
      <ImageKitUploader
        onUpload={(url) =>
          formik.setFieldValue("highlightsDescriptionImageUrl", url)
        }
        label="Highlights Image"
      />
      {formik.values.highlightsDescriptionImageUrl && (
        <img
          src={formik.values.highlightsDescriptionImageUrl}
          alt="Highlights Preview"
          className="h-32 object-cover mt-2 rounded"
        />
      )}

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Submit Project
      </button>
    </form>
    </FormikProvider>
  );
};

export default CreateProjectForm;
