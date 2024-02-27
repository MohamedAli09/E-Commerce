import React from "react";
import styles from "./FeatureProducts.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "@agney/react-loading";

export default function FeatureProducts() {
  const [products, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(true);
  async function getProducts() {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    setProducts(data.data);
    setIsloading(false);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container py-5 my-5">
      <div className="row g-3 ">
        {isloading ? (
          <ThreeDots
            visible='true'
            height="30"
            width="30"
            color="#4fa94d"
            radius="9"
            aria-label="three-dots-loading"
            wrapperstyle={{}}
           />
        ) : (
          ""
        )}
        {products.map((product) => (
          <div key={product.id} className="col-md-3 ">
            <div className="card  card-product">
              <div className="card-body">
                <div className="text-center position-relative">
                  <a href="#!">
                    <img
                      src={product.imageCover}
                      alt="Grocery Ecommerce Template"
                      className="mb-3 img-fluid "
                    />
                  </a>

                  <div className="card-product-action">
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i
                        className="bi bi-eye"
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        aria-label="Quick View"
                        data-bs-original-title="Quick View"
                      ></i>
                    </a>
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Wishlist"
                      data-bs-original-title="Wishlist"
                    >
                      <i className="bi bi-heart"></i>
                    </a>
                    <a
                      href="#!"
                      className="btn-action"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Compare"
                      data-bs-original-title="Compare"
                    >
                      <i className="bi bi-arrow-left-right"></i>
                    </a>
                  </div>
                </div>
                <div className="text-small mb-1">
                  <a href="#!" className="text-decoration-none ">
                    {product.category.name}
                  </a>
                </div>
                <h2 className="fs-6">
                  <a
                    href=""
                    className="text-inherit text-decoration-none text-dark"
                  >
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </a>
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
                    <span className="text-dark pe-2">{product.price}EGP</span>
                    <span className="text-decoration-line-through text-muted">
                      {product.priceAfterDiscount}
                    </span>
                  </div>
                  <div>
                    <a href="#!" className="btn btn-primary btn-sm">
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
