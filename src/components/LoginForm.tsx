import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { apiUrl } from "../constants";
import { useFormik } from "formik";
import { AuthContext } from "./AuthContext";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Too short!")
    .max(150, "Too long!")
    .matches(/^[\w.@+-]+$/, "Contains forbidden symbols")
    .required("Required!"),
  password: yup
    .string()
    .min(1, "Too short!")
    .max(128, "Too short!")
    .matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/, "Contains forbidden symbols!")
    .required("Required!"),
});

const LoginForm = () => {
  const { setUsername, setToken, setIsLoginShown } = useContext(AuthContext)!;
  const [error, setError] = useState(false);

  const initialValues = { username: "", password: "" };

  const handleSubmit = (values: typeof initialValues) =>
    axios
      .post(apiUrl + "/api-token-auth/", {
        username: values.username,
        password: values.password,
      })
      .then((res) => {
        setIsLoginShown(false);
        setToken(res.data.token);
        setUsername(values.username);
      })
      .catch(() => {
        setError(true);
      });

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: loginSchema,
  });

  return (
    <Container className="shadow p-5 w-auto rounded-3 bg-white position-relative">
      <h1 className="text-center fw-bold mb-4">Log In</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>
            Username <span className="text-primary">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="JDoe"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            isInvalid={!!formik.errors.username && formik.touched.username}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.username}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Password <span className="text-primary">*</span>
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="admin1234"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isInvalid={!!formik.errors.password && formik.touched.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Button
            type="submit"
            variant="outline-primary w-100"
            disabled={formik.isSubmitting}
          >
            Log In
          </Button>
          {error && (
            <Form.Text className="text-danger">Invalid login data!</Form.Text>
          )}
        </Form.Group>
      </Form>
    </Container>
  );
};

export default LoginForm;
