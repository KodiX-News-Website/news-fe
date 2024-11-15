import * as yup from "yup";

export const validationScheme = () => {
  return yup.object({
    email: yup
      .string()
      .required("This field is required")
      .trim()
      .min(2, "Invalid email minimum 2 chars")
      .max(50, "Invalid email maximum 50 chars"),

    password: yup.string().required("This field is required"),
  });
};
