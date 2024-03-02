import React from "react";
import styles from "./Brands.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "@agney/react-loading";
import { useQuery } from "react-query";

export default function Brands() {
  function getBrands() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }

  let { data, isLoading, isFetching } = useQuery("Brands", getBrands);
    return (
    <div>
      <div className="container py-5 my-5">
        <div className="row g-4">
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
            data?.data?.data.map((brand) => (
              <div className="col-md-3" key={brand._id}>
                <div className="card border">
                  <div className={styles.brandCard}>
                    <img
                      src={brand.image}
                      alt=""
                      style={{ width: "100%", height: "200px" }}
                    />
                    <h3 className="text-center">{brand.name}</h3>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
