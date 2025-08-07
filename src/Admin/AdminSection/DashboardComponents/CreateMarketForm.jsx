import React from "react";
import { useFormik } from "formik";
import ImageKitUploader from "../../ReuseableComponents/ImageKitUploader";
import { postMarket } from "../../Endpoints/MarketsAPI";
const CreateMarketForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      heading: "",
      description: "",
      imageUrl: "",
    },
    onSubmit: async (values) => {
      console.log("Submit payload:", values);

      try {
        await postMarket(
          values.title,
          values.heading,
          values.description,
          values.imageUrl
        );
        console.log("✅ Service posted successfully");
        formik.resetForm();
      } catch (error) {
        console.error("❌ Error posting service:", error);
        alert("Something went wrong while submitting the form.");
      }
    },
  });

  const handleImageUpload = (url) => {
    console.log("Uploaded image URL:", url);
    formik.setFieldValue("imageUrl", url); // ✅ set imageUrl in Formik state
  };

  const isBasicInfoFilled =
    formik.values.title.trim() &&
    formik.values.heading.trim() &&
    formik.values.description.trim();

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md"
    >
      <h1 className="text-2xl font-semibold mb-4">Create Market</h1>
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

export default CreateMarketForm;
