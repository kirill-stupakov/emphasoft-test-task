import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

const signupSchema = yup.object().shape({
  userName: yup
    .string()
    .min(1, "Too short!")
    .max(150, "Too long!")
    .matches(/^[\w.@+-]+$/, "Contains forbidden symbols")
    .required("Required!"),
  firstName: yup.string().max(30, "Too long!"),
  lastName: yup.string().max(150, "Too long!"),
  password: yup
    .string()
    .min(1, "Too short!")
    .max(128, "Too short!")
    .matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/, "Contains forbidden symbols!")
    .required("Required!"),
});

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: { userName: "", firstName: "", lastName: "", password: "" },
    onSubmit: (values) => console.log(values),
    validationSchema: signupSchema,
  });

  return (
    <Container
      fluid
      className="vh-100 position-absolute bg-black bg-opacity-10 d-flex justify-content-center align-items-center"
    >
      <Container className="shadow p-5 w-auto rounded-3 bg-white">
        <h1 className="text-center fw-bold mb-4">Sign Up</h1>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              Username <span className="text-primary">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              name="userName"
              placeholder="JDoe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              isInvalid={!!formik.errors.userName && formik.touched.userName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.userName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="John"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              isInvalid={!!formik.errors.firstName && formik.touched.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Doe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              isInvalid={!!formik.errors.lastName && formik.touched.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
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

          <Button type="submit" variant="outline-primary w-100">
            Sign Up
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default SignUpForm;
