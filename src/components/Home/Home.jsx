import React from "react";
import styles from "./Home.module.css";
import { useContext } from "react";
import { tokenContext } from "../../Context/TokenContext";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
 
export default function Home() {
  let { token } = useContext(tokenContext);

  return <FeatureProducts />;
}
