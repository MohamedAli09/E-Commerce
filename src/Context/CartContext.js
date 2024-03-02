import axios from "axios";
import { createContext } from "react";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { data } from "jquery";

let headers = {
  token: localStorage.getItem("userToken"),
};

export const cartContext = createContext();

export default function CartContextProvider(props) {
  const [numOfCards, setNumOfCards] = useState(0);

  async function addTocart(id) {
    const loadingToast = toast.loading("Waiting..."); // Create a new loading toast

    // console.log("add to cart", id);

    try {
      const res = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          productId: id,
        },
        {
          headers,
        }
      );

      // console.log(numOfCards);
      // console.log(res);
      toast.dismiss(loadingToast.id); // Remove the loading toast
      toast.success("Successfully Added!"); // Display success message
      setNumOfCards(res.data.numOfCartItems); // Update the number of cards (cart icon in the navbar
      return res.data;
    } catch (err) {
      console.log(err);
      toast.dismiss(loadingToast.id); // Remove the loading toast
      toast.error("Error"); // Display error message
    }
  }

  async function getCart() {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers,
        }
      );
      setNumOfCards(data.numOfCartItems); // Update the number of cards (cart icon in the navbar

      return data;
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <cartContext.Provider value={{ numOfCards, addTocart, getCart }}>
      {props.children}
    </cartContext.Provider>
  );
}
