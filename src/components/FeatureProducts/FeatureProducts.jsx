import React from "react";
import styles from "./FeatureProducts.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "@agney/react-loading";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";

export default function FeatureProducts() {
  let { addTocart } = useContext(cartContext);

  function addCart(id) {
    addTocart(id);
  }
  // const [products, setProducts] = useState([]);
  // const [isloading, setIsloading] = useState(true);
  // async function getProducts() {
  //   let { data } = await axios.get(
  //     "https://ecommerce.routemisr.com/api/v1/products"
  //   );
  //   setProducts(data.data);
  //   setIsloading(false);
  // }
  // useEffect(() => {
  //   getProducts();
  // }, []);
  function getProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  let { data, isLoading, isFetching } = useQuery(
    "FeatureProducts",
    getProducts
  );
  let unique = 0;
  
  // console.log(data?.data?.data);
  // console.log(data?.data?.data);
  return (
    <>
      <div className="container py-5 my-5 ">
        <div className="row g-4 ">
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <ThreeDots
                visible="true"
                height={80}
                width={80}
                color="#4fa94d"
                radius={9}
                aria-label="three-dots-loading"
                wrapperstyle={{}}
              />
            </div>
          ) : (
            ""
          )}
          {data?.data?.data?.map((product) => (
             <div  className="col-md-3  " key={product._id}>
              <div className="card  card-product ">
                <div className="card-body">
                  <Link
                    to={`details/${product.id}`}
                    className="text-decoration-none"
                  >
                    <div className="text-center position-relative">
                      <div>
                        <img
                          src={product.imageCover}
                          alt="Grocery Ecommerce Template"
                          className="mb-3 img-fluid "
                        />
                      </div>
                    </div>
                    <div className="text-small mb-1">
                      <p className=" ">{product.category.name}</p>
                    </div>
                    <h2 className="fs-6">
                      <p className="text-inherit text-decoration-none text-dark">
                        {product.title.split(" ").slice(0, 2).join(" ")}
                      </p>
                    </h2>
                    <div>
                      <small className="text-warning pe-1">
                        {product.ratingsAverage >= 2 ? (
                          <>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </>
                        ) : (
                          ""
                        )}
                        {product.ratingsAverage >= 3 ? (
                          <>
                            <i className="fa fa-star"></i>
                          </>
                        ) : (
                          ""
                        )}
                        {product.ratingsAverage >= 4 ? (
                          <>
                            <i className="fa fa-star"></i>
                          </>
                        ) : (
                          ""
                        )}

                        {product.ratingsAverage >= 5 ? (
                          <>
                            <i className="fa fa-star"></i>
                          </>
                        ) : (
                          ""
                        )}
                      </small>
                      <span className="text-muted small">
                        {product.ratingsAverage}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="text-dark pe-2">
                          {product.price}EGP
                        </span>
                        <span className="text-decoration-line-through text-muted">
                          {product.priceAfterDiscount}
                        </span>
                      </div>
                      <div></div>
                    </div>
                  </Link>
                  <div className="d-flex justify-content-end align-items-center">
                    {" "}
                    <button
                      onClick={() => addCart(product.id)}
                      href=""
                      className="  btn btn-primary btn-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
