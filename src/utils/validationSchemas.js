import * as Yup from "yup";

const phoneRegExp = /^[0-9]+$/;

export const experienceSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  company: Yup.string(),
  location: Yup.string(),
  description: Yup.string(),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().when("currentlyWorkHere", {
    is: false,
    then: (schema) =>
      schema
        .required("End date is required")
        .min(Yup.ref("startDate"), "End date cannot be before start date"),
    otherwise: (schema) => schema.nullable(),
  }),
  currentlyWorkHere: Yup.boolean(),
});

export const educationSchema = Yup.object().shape({
  institution: Yup.string().required("Institution name is required"),
  branch: Yup.string().required("Branch name is required"),
  course: Yup.string().required("Course name is required"),
  schoolLocation: Yup.string().required("Location is required"),
  description: Yup.string(),
});

export const applicationValidationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email"), null], "Emails must match")
    .required("Please confirm your email"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number must only contain digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  jobTitle: Yup.string().required("Please select a job title"),
  resume: Yup.mixed()
    .required("A resume is required")
    .test(
      "fileSize",
      "File is too large",
      (value) => value && value.size <= 5 * 1024 * 1024
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => value && value.type === "application/pdf"
    ),
  message: Yup.string(),
  experience: Yup.array().of(experienceSchema),
  education: Yup.array()
    .of(educationSchema)
    .min(1, "At least one education entry is required"),
});
