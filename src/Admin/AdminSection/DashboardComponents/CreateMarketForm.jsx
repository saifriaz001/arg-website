import React, { useState } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ImageKitUploader from "../../ReuseableComponents/ImageKitUploader";
import { postMarket } from "../../Endpoints/MarketsAPI";

// ✅ Yup validation schema
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  mainHeading: Yup.string().required("Main heading is required"),
  mainDescription: Yup.string().required("Main description is required"),
  imageUrl: Yup.string().required("Main image is required"),
});

const CreateMarketForm = () => {
  const [submitError, setSubmitError] = useState("");

  return (
    <Formik
      initialValues={{
        title: "",
        mainHeading: "",
        mainDescription: "",
        imageUrl: "",
        secondHeading: "",
        secondDescription: "",
        descriptionImageUrl: "",
        highlightsHeading: "",
        highlightsDescriptions: "",
        highlightsDescriptionImageUrl: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        setSubmitError(""); // Reset error

        try {
          await postMarket(
          values.title,
          values.mainHeading,
          values.mainDescription,
          values.imageUrl,
          values.secondHeading,
          values.secondDescription,
          values.descriptionImageUrl,
          values.highlightsHeading,
          values.highlightsDescriptions
            .split("\n")
            .filter((line) => line.trim() !== ""),
          values.highlightsDescriptionImageUrl
        ); 
          resetForm();
        } catch (error) {
          if (
            error?.response?.data?.message?.includes("E11000") ||
            error?.message?.includes("E11000")
          ) {
            setSubmitError("❌ A market with this title already exists.");
          } else {
            setSubmitError("❌ Something went wrong while submitting the form.");
          }
        }
      }}
    >
      {({ setFieldValue, values }) => {
        const isBasicInfoFilled =
          values.title.trim() &&
          values.mainHeading.trim() &&
          values.mainDescription.trim();

        return (
          <Form className="space-y-6 p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-semibold">Create Market</h1>

            {submitError && (
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded">
                {submitError}
              </div>
            )}

            {/* Title */}
            <div>
              <Field
                name="title"
                placeholder="Title *"
                className="w-full border px-4 py-2 rounded"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Main Heading */}
            <div>
              <Field
                name="mainHeading"
                placeholder="Main Heading *"
                className="w-full border px-4 py-2 rounded"
              />
              <ErrorMessage
                name="mainHeading"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Main Description */}
            <div>
              <Field
                as="textarea"
                name="mainDescription"
                placeholder="Main Description *"
                rows={4}
                className="w-full border px-4 py-2 rounded"
              />
              <ErrorMessage
                name="mainDescription"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Main Image Upload */}
            <div>
              <ImageKitUploader
                disabled={!isBasicInfoFilled}
                onUpload={(url) => setFieldValue("imageUrl", url)}
                label="Main Image *"
              />
              <ErrorMessage
                name="imageUrl"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
              {values.imageUrl && (
                <img
                  src={values.imageUrl}
                  alt="Main Preview"
                  className="h-32 object-cover mt-2 rounded"
                />
              )}
            </div>

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
              onUpload={(url) => setFieldValue("descriptionImageUrl", url)}
              label="Description Image"
            />
            {values.descriptionImageUrl && (
              <img
                src={values.descriptionImageUrl}
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
                setFieldValue("highlightsDescriptionImageUrl", url)
              }
              label="Highlights Image"
            />
            {values.highlightsDescriptionImageUrl && (
              <img
                src={values.highlightsDescriptionImageUrl}
                alt="Highlights Preview"
                className="h-32 object-cover mt-2 rounded"
              />
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateMarketForm;
