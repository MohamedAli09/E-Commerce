import React from "react";
import styles from "./Register.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import signupImage from "../../Assets/Imgs/signup-g.svg";

export default function Register() {
  const [erorrMessage, setErorrMessage] = useState(null);
  const [isloading, setIsloading] = useState(false);

  let navigate = useNavigate();

  let mySchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(5, "min is   5 char")
      .max(20, "max is 20 char "),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must contain at least 8 characters, including UPPER/lowercase and numbers"
      ),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Re-Password is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^[0-9]{11}$/, "Phone must be 11 digit"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: mySchema,
    onSubmit: (values) => {
      formRegister(values);
    },
  });
  async function formRegister(values) {
    setIsloading(true);
    return await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      .then((data) => {
        navigate("/login");
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setErorrMessage(error.response.data.message);
        setIsloading(false);
      });
  }

  return (
    <>
      <div className={`container py-5 my-5 `}>
        {erorrMessage ? (
          <div className="mx-auto alert alert-primary text-center w-25 d-flex justify-content-center">
            {erorrMessage}
          </div>
        ) : null}

        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-10 col-lg-4 order-lg-1 order-2">
            <img src={signupImage} alt="" className="img-fluid" />
          </div>

          <div className="col-12 col-md-11 col-lg-5 order-lg-1 order-2 offset-lg-1  ">
            <div className="w-75 mx-auto">
              <form action="" onSubmit={formik.handleSubmit}>
                <h2 className="fs-4">Get Start Shopping Now</h2>
                <p className={styles.fs8}>
                  Welcome to FreshCart! Enter your email to get started.
                </p>
                <input
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  type="text"
                  name="name"
                  id="name"
                  className=" form-control "
                  placeholder="name"
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className={`${styles.colorDanger} ps-1`}>
                    {formik.errors.name}{" "}
                  </div>
                ) : null}
                <div className=" mb-3 "></div>

                <input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  type="email"
                  name="email"
                  id="email"
                  className=" form-control "
                  placeholder="Email"
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={`${styles.colorDanger} ps-1`}>
                    {" "}
                    {formik.errors.email}{" "}
                  </div>
                ) : null}
                <div className=" mb-3 "></div>

                <input
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className=" form-control "
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className={`${styles.colorDanger} ps-1`}>
                    {" "}
                    {formik.errors.password}{" "}
                  </div>
                ) : null}
                <div className=" mb-3 "></div>

                <input
                  onChange={formik.handleChange}
                  value={formik.values.rePassword}
                  type="password"
                  name="rePassword"
                  id="rePassword"
                  placeholder="Re-Password"
                  className=" form-control "
                  onBlur={formik.handleBlur}
                />
                {formik.touched.rePassword && formik.errors.rePassword ? (
                  <div className={`${styles.colorDanger} ps-1`}>
                    {" "}
                    {formik.errors.rePassword}{" "}
                  </div>
                ) : null}
                <div className=" mb-3 "></div>

                <input
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className=" form-control "
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className={`${styles.colorDanger} ps-1`}>
                    {" "}
                    {formik.errors.phone}{" "}
                  </div>
                ) : null}
                <div className=" mb-3 "></div>

                {isloading ? (
                  <div className="pt-2 spinner-border text-primary"></div>
                ) : (
                  <button type="submit" className="pt-2 btn btn-primary w-100">
                    Register
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
