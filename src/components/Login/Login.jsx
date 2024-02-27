import React from "react";
import styles from "./Login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginImage from "../../Assets/Imgs/signin-g.svg";
import { tokenContext } from "../../Context/TokenContext";
import { useContext } from "react";

export default function Login() {
  let { token, setToken } = useContext(tokenContext);
   const [erorrMessage, setErorrMessage] = useState(null);
  const [isloading, setIsloading] = useState(false);
  let navigate = useNavigate();

  let mySchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        "Password must contain at least 8 characters, including UPPER/lowercase and numbers"
      ),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: mySchema,
    onSubmit: (values) => {
      formLogin(values);
    },
  });
  async function formLogin(values) {
    setIsloading(true);
    return await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
      .then((data) => {
        //save token in local storage
        localStorage.setItem("userToken", data.data.token);

        //set token in context
        setToken(data.data.token);

        navigate("/");
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
            <img src={loginImage} alt="" className="img-fluid" />
          </div>
          <div className="col-12 col-md-11 col-lg-5 order-lg-1 order-2 offset-lg-1  ">
            <div className="w-75 mx-auto">
              <form action="" onSubmit={formik.handleSubmit}>
                <h2 className="fs-2">Sign in to FreshCart</h2>
                <p className={styles.fs8}>
                  Welcome back to FreshCart! Enter your email to get started.
                </p>

                <input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className=" form-control "
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={`${styles.colorDanger} ps-1`}>
                    {" "}
                    {formik.errors.email}{" "}
                  </div>
                ) : null}
                <div className="mb-3"></div>

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
                <div className="mb-3"></div>

                {isloading ? (
                  <div className="pt-2 spinner-border text-primary "></div>
                ) : (
                  <button type="submit" className="pt-2 btn btn-primary w-100">
                    Login
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
