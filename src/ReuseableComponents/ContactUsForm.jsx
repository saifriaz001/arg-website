import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      projectType: Yup.string().required('Project type is required'),
      message: Yup.string().required('Please describe your project briefly'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        console.log('📩 Submitting:', values);
        // await axios.post('/api/contact', values); // Integrate backend API
        alert('Message sent successfully!');
        resetForm();
      } catch (error) {
        console.error('❌ Submission failed:', error);
        alert('Something went wrong. Please try again later.');
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-2xl mx-auto page-background border mustard-border p-6 rounded shadow space-y-5"
    >
      <h2 className="Project-heading text-center">Let’s Discuss Your Project</h2>
      <p className="Project-description text-center">
        Share your vision and we’ll reach out within 1 business day.
      </p>

      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full Project-description mustard-border border px-4 py-2 rounded"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full Project-description mustard-border border px-4 py-2 rounded"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}
      </div>

      {/* Phone (Optional) */}
      <div>
        <input
          type="text"
          name="phone"
          placeholder="Phone (Optional)"
          className="w-full Project-description mustard-border border px-4 py-2 rounded"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
      </div>

      {/* Project Type */}
      <div>
        <select
          name="projectType"
          className="w-full Project-description border mustard-border px-4 py-2 rounded text-gray-700"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.projectType}
        >
          <option value="">Select Project Type</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Institutional">Institutional</option>
          <option value="Hospitality">Hospitality</option>
          <option value="Public">Public / Government</option>
        </select>
        {formik.touched.projectType && formik.errors.projectType && (
          <p className="text-red-500 text-sm">{formik.errors.projectType}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          name="message"
          placeholder="Tell  us a bit about your project..."
          rows={4}
          className="w-full Project-description border mustard-border px-4 py-2 rounded"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 text-sm">{formik.errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="Load-More w-full flex justify-center  mustard-border items-center text-center"
      >
        Send Inquiry
      </button>
    </form>
  );
};

export default ContactUsForm;
