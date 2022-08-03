import React from "react";
import { useReactiveVar } from "@apollo/client";

import { cartItemsVar } from "../../cache";
import { GET_PRODUCT_DETAIL_ITEM } from "../hooks/useProductDetailItem";

export { GET_PRODUCT_DETAIL_ITEM };

export const ToggleTripButton = ({ id }) => {
  const cartItems = useReactiveVar(cartItemsVar);
  const isInCart = id ? cartItems.includes(id) : false;

  return (
    <div>
      <button
        onClick={() => {
          if (id) {
            cartItemsVar(
              isInCart
                ? cartItems.filter((itemId) => itemId !== id)
                : [...cartItems, id]
            );
          }
        }}
        data-testid={"action-button"}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};
