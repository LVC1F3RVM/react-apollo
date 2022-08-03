import React, { useCallback } from "react";
import { gql, useQuery, makeVar, useReactiveVar } from "@apollo/client";
import { useParams } from "react-router-dom";

import { useProductDetailItem } from "../../hooks/useProductDetailItem";

import "../AllPage/AllPage.css";

const itemsInCart = makeVar([]);

// const GET_CART = gql`
//   query getProductDetailItem {
//     categories {
//       products {
//         id
//         name
//         gallery
//         prices {
//           amount
//           currency {
//             label
//             symbol
//           }
//         }
//       }
//     }
//   }
// `;

export default function Cart() {
  const { id } = useParams();
  const items = useReactiveVar(itemsInCart);

  const { loading, error, data } = useProductDetailItem(id);
  if (loading) return <div>...spinner</div>;
  if (error) return <div>smthg wnt wrng</div>;

  return (
    <div className="AllPage">
      <h2>Cart</h2>
      <div></div>
    </div>
  );
}
