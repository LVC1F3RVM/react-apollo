import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import { useProductDetailItem } from "../../../../hooks/useProductDetailItem";
import "../../../PDP/PDP.css";
import { ToggleTripButton } from "../../../../ToggleCartButton/ToggleCartButton";

export default function CartItem() {
  const { id } = useParams();

  const { error, data, loading } = useProductDetailItem(id);

  if (loading) return <div>...spinner</div>;
  if (error) return <div>smthg wnt wrng</div>;

  return (
    <div className="product-details-page">
      <div className="imgSize">
        {data.product.gallery.map((image) => {
          return <img src={image} alt="product" />;
        })}
      </div>
      <div className="item-content">
        <h1>{data.product.name}</h1>
        <h2>{data.product.brand}</h2>
        <span>
          {data.product.attributes.map((item) => {
            if (
              item.id === "Capacity" ||
              item.id === "With USB 3 ports" ||
              item.id === "Touch ID in keyboard"
            ) {
              return (
                <div>
                  {`${item.name}:`}
                  <ul>
                    {item.items.map((capacity) => {
                      if (item.type === "text") {
                        return (
                          <li key={capacity.id}>{capacity.displayValue}</li>
                        );
                      }
                    })}
                  </ul>
                </div>
              );
            } else if (item.id === "Size") {
              return (
                <div>
                  {`${item.name}:`}
                  <ul>
                    {item.items.map((size) => {
                      if (item.type === "text") {
                        return <li key={size.id}>{size.value}</li>;
                      }
                    })}
                  </ul>
                </div>
              );
            }
          })}
        </span>
        <span>
          {data.product.attributes.map((item) => {
            if (item.id === "Color") {
              return (
                <div>
                  {`${item.name}:`}
                  <ul>
                    {item.items.map((color) => {
                      if (item.type === "swatch") {
                        return <li key={color.id}>{color.displayValue}</li>;
                      }
                    })}
                  </ul>
                </div>
              );
            }
          })}
        </span>
        <div>
          {data.product.prices.map((price) => {
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
        <ToggleTripButton>remove from cart</ToggleTripButton>
      </div>
    </div>
  );
}
