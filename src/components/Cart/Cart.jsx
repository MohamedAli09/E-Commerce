import React from "react";
import styles from "./Cart.module.css";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext";
import { useEffect } from "react";
import { ThreeDots } from "@agney/react-loading";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

let headers = {
  token: localStorage.getItem("userToken"),
};

export default function Cart() {
  const { numOfCards, getCart } = useContext(cartContext);
  const [cartDetails, setCartDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function deleteFromCart(id) {
    const loadingToast = toast.loading("Waiting..."); // Create a new loading toast

    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        { headers }
      );
      // console.log(data);

      await getCartData();
      toast.dismiss(loadingToast.id); // Remove the loading toast
      toast.success("Successfully Removed!"); // Display success message
    } catch (error) {
      console.log(error);
      toast.dismiss(loadingToast.id); // Remove the loading toast
      toast.error("Error"); // Display error message
    }
  }

  async function getCartData() {
    const data = await getCart();
    setCartDetails(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getCartData();
  }, []);
  // console.log(cartDetails);

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
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
        <MDBContainer className="py-5 h-100 ">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="p-4">
                  <MDBRow>
                    <MDBCol lg="12">
                      <MDBTypography tag="h5">
                        <a href="#!" className="text-body">
                          <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                          Continue shopping
                        </a>
                      </MDBTypography>

                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">{`You have ${cartDetails?.numOfCartItems} items in your cart`}</p>
                        </div>
                        <div>
                          <p>
                            <span className="text-muted">Sort by:</span>
                            <a href="#!" className="text-body">
                              price
                              <MDBIcon fas icon="angle-down mt-1" />
                            </a>
                          </p>
                        </div>
                      </div>

                      {cartDetails?.data?.products?.map((item) => (
                        <MDBCard className="mb-3" key={item.product.id}>
                          <MDBCardBody>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div className=" w-50 d-flex   align-items-center">
                                  <MDBCardImage
                                    src={item.product.imageCover}
                                    fluid
                                    className="rounded-3 w-50 "
                                    style={{ width: "65px" }}
                                    alt="Shopping item"
                                  />
                                </div>
                                <div className="">
                                  <MDBTypography tag="h5">
                                    {item.product.title
                                      .split(" ")
                                      .slice(0, 2)
                                      .join(" ")}
                                  </MDBTypography>
                                  {/* <p className="small mb-0">256GB, Navy Blue</p> */}
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center  w-25 justify-content-around">
                                <div style={{ width: "50px" }} className="">
                                  <MDBTypography
                                    tag="h5"
                                    className="fw-normal mb-0"
                                  >
                                    {item.count}
                                  </MDBTypography>
                                </div>
                                <div style={{ width: "80px" }}>
                                  <MDBTypography
                                    tag="h5"
                                    className={`mb-0 ${styles.h5width}`}
                                  >
                                    {item.price} EGP
                                  </MDBTypography>
                                </div>
                                <button
                                  className="btn  btn-primary"
                                  onClick={() => {
                                    deleteFromCart(item.product.id);
                                  }}
                                >
                                  {" "}
                                  <MDBIcon fas icon="trash-alt" />
                                </button>
                              </div>
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      ))}
                    </MDBCol>

                    <MDBCol lg="12">
                      <MDBCard className="bg-primary text-white rounded-3">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography tag="h5" className="mb-0">
                              Card details
                            </MDBTypography>
                          </div>

                          <p className="small">Card type</p>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-visa fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-amex fa-2x me-2" />
                          </a>
                          <a href="#!" type="submit" className="text-white">
                            <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                          </a>

                          <form className="mt-4">
                            <MDBInput
                              className="mb-4"
                              label="Cardholder's Name"
                              type="text"
                              size="lg"
                              placeholder="Cardholder's Name"
                              contrast
                            />

                            <MDBInput
                              className="mb-4"
                              label="Card Number"
                              type="text"
                              size="lg"
                              minLength="19"
                              maxLength="19"
                              placeholder="1234 5678 9012 3457"
                              contrast
                            />

                            <MDBRow className="mb-4">
                              <MDBCol md="6">
                                <MDBInput
                                  className="mb-4"
                                  label="Expiration"
                                  type="text"
                                  size="lg"
                                  minLength="7"
                                  maxLength="7"
                                  placeholder="MM/YYYY"
                                  contrast
                                />
                              </MDBCol>
                              <MDBCol md="6">
                                <MDBInput
                                  className="mb-4"
                                  label="Cvv"
                                  type="text"
                                  size="lg"
                                  minLength="3"
                                  maxLength="3"
                                  placeholder="&#9679;&#9679;&#9679;"
                                  contrast
                                />
                              </MDBCol>
                            </MDBRow>
                          </form>

                          <hr />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">$4798.00</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">$4818.00</p>
                          </div>

                          <MDBBtn color="info" block size="lg">
                            <div className="d-flex justify-content-between">
                              <span className="me-2">
                                {cartDetails?.data?.totalCartPrice} EGP
                              </span>
                              <span>
                                Checkout{" "}
                                <i className="fas fa-long-arrow-alt-right "></i>
                              </span>
                            </div>
                          </MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
    </section>
  );
}
