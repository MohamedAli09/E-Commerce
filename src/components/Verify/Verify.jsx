import React from "react";
import styles from "./Verify.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import loginImage from "../../Assets/Imgs/Wavy_Bus-24_Single-10.jpg";
import { tokenContext } from "../../Context/TokenContext";
import { useContext } from "react";

export default function Verify() {
  let { token, setToken } = useContext(tokenContext);
  const [erorrMessage, setErorrMessage] = useState(null);
  const [isloading, setIsloading] = useState(false);
  let navigate = useNavigate();

  let mySchema = Yup.object({
    resetCode: Yup.string().required("resetCode is required"),
  });
  let formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema: mySchema,
    onSubmit: (values) => {
      formLogin(values);
    },
  });
  async function formLogin(values) {
    setIsloading(true);
    return await axios
      .post(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        values
      )
      .then((data) => {
        //save token in local storage
        // localStorage.setItem("userToken", data.data.token);

        //set token in context
        // setToken(data.data.token);
        // console.log(data);
        navigate("/resetpassword");
        setIsloading(false);
      })
      .catch((error) => {
        // console.log(error.response.data.message);
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
                <h2 className="fs-2">Veirfy Your Code</h2>
                <p className={styles.fs8}>
                Veirfy Your Code and Resetpassword
                </p>

                <input
                  onChange={formik.handleChange}
                  value={formik.values.resetCode}
                  name="resetCode"
                  id="resetCode"
                  placeholder="setCode"
                  className=" form-control "
                  onBlur={formik.handleBlur}
                />
                {formik.touched.resetCode && formik.errors.resetCode ? (
                  <div className={`${styles.colorDanger} ps-1`}>
                    {" "}
                    {formik.errors.resetCode}{" "}
                  </div>
                ) : null}
                <div className="mb-3"></div>

                {isloading ? (
                  <div className="pt-2 spinner-border text-primary "></div>
                ) : (
                  <button type="submit" className="pt-2 btn btn-primary w-100">
                    Verfiy resetCode
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
