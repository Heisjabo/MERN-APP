import * as yup from "yup";

export const userSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().min(6).max(8).required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref('password')]).required("Confirm Password is required")
});

