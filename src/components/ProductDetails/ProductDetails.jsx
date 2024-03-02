import React from "react";
import styles from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "@agney/react-loading";
import { useLayoutEffect } from "react";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";


export default function ProductDetails() {
  let { addTocart } = useContext(cartContext);

  function addCart(id) {
    addTocart(id);
  }
  const [detalis, setDetalis] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();
  async function getProduct(id) {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
    setDetalis(data.data);
    setIsLoading(false);
  }
  useEffect(() => {
    getProduct(id);
  }, []);

  // let { data, isLoading, isFetching } = useQuery("ProductDetails", () =>
  //   getProduct(id)
  // );
  // console.log(data);

  return (
    <>
      <div className="container  p-5  mt-5 justify-content-center align-items-center ">
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
          <div className="row">
            <div className="col-md-5">
              <div className="card-details-img   mb-3 ">
                <img
                  src={detalis?.imageCover}
                  alt="Grocery Ecommerce Template"
                  className=" w-75"
                />
              </div>
            </div>
            <div className="col-md-6  justify-content-center d-flex">
              <div className="card-details-content w-100">
                <h1 className="mb-3">Napolitanke Ljesnjak</h1>
                <div className="fs-4">
                  <span className="fw-bold text-dark me-1">
                    {" "}
                    {detalis?.price}EGP
                  </span>
                  <span className="text-decoration-line-through text-muted">
                    {detalis?.priceAfterDiscount}
                  </span>
                </div>
                <hr className="mb-4 w-100"></hr>
                <div className="">
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1"
                  >
                    small
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary me-1"
                  >
                    medium
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    larg
                  </button>
                </div>

                <div className="mt-3 row justify-content-start g-2 align-items-center">
                  <p className="text-secondary">{detalis?.description}</p>
                  <div className="col-xxl-4 col-lg-4 col-md-5 col-5 d-grid">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => addCart(detalis.id)}
                    >
                      <i className="fa-solid fa-bag-shopping me-2"></i> Add to
                      cart
                    </button>
                  </div>
                  <div className="col-md-4 col-4">
                    <a
                      className="btn btn-light"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Compare"
                    >
                      <i className="fa-solid fa-arrow-right-arrow-left"></i>{" "}
                    </a>
                    <a
                      className="btn btn-light"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      aria-label="Wishlist"
                    >
                      <i className="fa-regular fa-heart"></i>{" "}
                    </a>
                  </div>
                </div>
                <hr className="my-4"></hr>
                <table className="table table-borderless mb-3">
                  <tbody>
                    <tr>
                      <td className="text-secondary">Product Code:</td>
                      <td className="text-secondary">FBB00255</td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Availability:</td>
                      <td className="text-secondary">In Stock</td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Type:</td>
                      <td className="text-secondary">Fruits</td>
                    </tr>
                    <tr>
                      <td className="text-secondary">Shipping:</td>
                      <td>
                        <small className=" text-secondary">
                          01 day shipping.
                          <span className="text-muted">
                            ( Free pickup today)
                          </span>
                        </small>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="dropdown">
                  <a
                    className="btn btn-outline-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Share
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item">
                        <i className="fa-brands fa-facebook me-2"></i>
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <i className="fa-brands fa-twitter me-2"></i> Twitter
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item">
                        <i className="fa-brands fa-instagram me-2"></i>
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <button className="btn btn-primary">Add to Cart</button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
