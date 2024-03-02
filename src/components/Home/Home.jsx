import React from "react";
import styles from "./Home.module.css";
import { useContext } from "react";
import { tokenContext } from "../../Context/TokenContext";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import CategorySlider from "../CategorySlider/CategorySlider";
import MainSlider from "../MainSlider/MainSlider";
 
export default function Home() {
  let { token } = useContext(tokenContext);

  return (
    <>
    <MainSlider/>
    <CategorySlider/>
     <FeatureProducts />;
    </>
  )
}
