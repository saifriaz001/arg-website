import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ImageKitUploader from "../../ReuseableComponents/ImageKitUploader";
import { postService } from "../../Endpoints/ServicesAPI";

const CreateServiceForm = () => {
  const initialValues = {
    title: "",
    mainHeading: "",
    mainDescription: "",
    imageUrl: "",
    // Optional fields (uncomment UI below if/when you want to show them)
    secondHeading: "",
    secondDescription: "",
    descriptionImageUrl: "",
    highlightsHeading: "",
    highlightsDescriptions: "", // comma-separated in UI → split in submit
    highlightsDescriptionImageUrl: ""
  };

  const validationSchema = Yup.object({
    title: Yup.string().trim().required("Title is required"),
    mainHeading: Yup.string()
      .trim()
      .min(3, "Main heading must be at least 3 characters")
      .required("Main heading is required"),
    mainDescription: Yup.string()
      .trim()
      .min(3, "Main description must be at least 3 characters")
      .required("Main description is required"),
    imageUrl: Yup.string().url("Must be a valid URL").required("Image is required")
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          // Convert comma-separated highlights to array (optional)
          const payload = {
            ...values,
            highlightsDescriptions: values.highlightsDescriptions
            .split("\n")
            .filter((line) => line.trim() !== "")
          };

          await postService(payload); // uses the new signature
          console.log("✅ Service posted successfully");
          resetForm();
        } catch (err) {
          console.error("❌ Error posting service:", err);
          alert(err?.message || "Something went wrong while submitting the form.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, setFieldValue, isSubmitting, touched, errors }) => {
        const isBasicInfoFilled =
          values.title.trim() &&
          values.mainHeading.trim() &&
          values.mainDescription.trim();

        return (
          <Form className="bg-page-background space-y-4 p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md">
            <h1 className="heading-title">SERVICES</h1>

            {/* Title */}
            <div className="h-18">
              <label className="paragraph-lg" htmlFor="title">
                Title
              </label>
              <Field
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                className="w-full border px-4 py-2"
              />
              <ErrorMessage name="title" component="div" className="error-text" />
            </div>

            {/* Main Heading */}
            <div className="h-20">
              <label className="paragraph-lg" htmlFor="mainHeading">
                Main Heading
              </label>
              <Field
                id="mainHeading"
                name="mainHeading"
                type="text"
                placeholder="Main Heading"
                className="w-full border px-4 py-2 rounded"
              />
              <ErrorMessage
                name="mainHeading"
                component="div"
                className="error-text"
              />
            </div>

            {/* Main Description */}
            <div className="h-30">
              <label className="paragraph-lg" htmlFor="mainDescription">
                Main Description
              </label>
              <Field
                as="textarea"
                id="mainDescription"
                name="mainDescription"
                placeholder="Main Description"
                className="w-full border px-4 py-2 rounded"
              />
              <ErrorMessage
                name="mainDescription"
                component="div"
                className="error-text"
              />
            </div>

            {/* Image Upload (imageUrl) */}
            <ImageKitUploader
              disabled={!isBasicInfoFilled}
              onUpload={(url) => setFieldValue("imageUrl", url)}
              label="Service Image"
            />
            {values.imageUrl && (
              <img
                src={values.imageUrl}
                alt="Preview"
                className="h-32 object-cover mt-2 rounded"
              />
            )}
            <ErrorMessage name="imageUrl" component="div" className="error-text" />

            {/* OPTIONAL FIELDS — uncomment to use */}
            
            <div>
              <label className="paragraph-lg" htmlFor="secondHeading">Second Heading</label>
              <Field
                id="secondHeading"
                name="secondHeading"
                type="text"
                placeholder="Second Heading (optional)"
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="paragraph-lg" htmlFor="secondDescription">Second Description</label>
              <Field
                as="textarea"
                id="secondDescription"
                name="secondDescription"
                placeholder="Second Description (optional)"
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            <ImageKitUploader
              disabled={!isBasicInfoFilled}
              onUpload={(url) => setFieldValue("descriptionImageUrl", url)}
              label="Description Image (optional)"
            />
            {values.descriptionImageUrl && (
              <img
                src={values.descriptionImageUrl}
                alt="Description Preview"
                className="h-32 object-cover mt-2 rounded"
              />
            )}

            <div>
              <label className="paragraph-lg" htmlFor="highlightsHeading">Highlights Heading</label>
              <Field
                id="highlightsHeading"
                name="highlightsHeading"
                type="text"
                placeholder="Highlights heading (optional)"
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            <div>
              <label className="paragraph-lg" htmlFor="highlightsDescriptions">
                Highlights (comma-separated)
              </label>
              <Field
                as="textarea"
                id="highlightsDescriptions"
                name="highlightsDescriptions"
                placeholder="Highlights (one per line)"
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            <ImageKitUploader
              disabled={!isBasicInfoFilled}
              onUpload={(url) => setFieldValue("highlightsDescriptionImageUrl", url)}
              label="Highlights Image (optional)"
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
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateServiceForm;
