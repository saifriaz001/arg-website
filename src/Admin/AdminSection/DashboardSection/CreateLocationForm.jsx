import React from 'react';
import { useFormik } from 'formik';
import { postLocation } from "../../Endpoints/LocationAPI";
import LocationList from '../DashboardSection/LocationList';

const CreateLocationForm = () => {
    const formik = useFormik({
        initialValues: {
            country: '',
            state: '',
            town: ''
        },
        validate: values => {
            const errors = {};
            if (!values.country) errors.country = 'Required';
            if (!values.state) errors.state = 'Required';
            if (!values.town) errors.town = 'Required';
            return errors;
        },
        onSubmit: async values => {
            try {
                const res = await postLocation(values.country, values.state, values.town);
                console.log('Location created:', res);
                if (res?.data) {
                    alert('Location created successfully!');
                } else {
                    throw new Error("No response data");
                }
                formik.resetForm();
            } catch (err) {
                alert('Failed to create location');
                console.error('Create location error:', err);
            }
        }
    });

    return (
        <div className="w-full max-w-2xl mx-auto bg-white shadow-md p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create Location</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-5">
                {/* Country */}
                <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                    </label>
                    <input
                        id="country"
                        name="country"
                        type="text"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    />
                    {formik.touched.country && formik.errors.country && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.country}</p>
                    )}
                </div>

                {/* State */}
                <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        State
                    </label>
                    <input
                        id="state"
                        name="state"
                        type="text"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    />
                    {formik.touched.state && formik.errors.state && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.state}</p>
                    )}
                </div>

                {/* Town */}
                <div>
                    <label htmlFor="town" className="block text-sm font-medium text-gray-700">
                        Town
                    </label>
                    <input
                        id="town"
                        name="town"
                        type="text"
                        value={formik.values.town}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    />
                    {formik.touched.town && formik.errors.town && (
                        <p className="text-red-500 text-sm mt-1">{formik.errors.town}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>

            <div>
                <LocationList/>
            </div>
        </div>
    );
};

export default CreateLocationForm;  