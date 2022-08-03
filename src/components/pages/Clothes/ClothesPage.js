import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

import "../AllPage/AllPage.css";

const GET_CATEGORY_ITEM = gql`
  query getClothesItem {
    category(input: { title: "clothes" }) {
      products {
        name
        gallery
        prices {
          amount
          currency {
            label
            symbol
          }
        }
      }
    }
  }
`;

export default function ClothesPage() {
  const { error, data, loading } = useQuery(GET_CATEGORY_ITEM);

  console.log({ error, loading, data });

  if (loading) return <div>...spinner</div>;
  if (error) return <div>smthg wnt wrng</div>;

  return (
    <div className="AllPage">
      {data.category.products.map((item) => {
        return (
          <div>
            <div className="imgSize">
              <Link key={item.id} to={`/${item.id}`}>
                <div className="imgSize">
                  <img src={item.gallery[0]} alt="product" />
                </div>
                <h3>{item.name}</h3>
              </Link>
            </div>
            <h3>{item.name}</h3>
            <div>
              {item.prices.map((price) => {
                if (price.currency.label === "USD") {
                  return (
                    <div>
                      <h2>
                        {price.amount}
                        {price.currency.symbol}
                      </h2>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
