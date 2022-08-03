import React from "react";
import { Link } from "react-router-dom";

import { useProductItem } from "../../hooks/useProductItem";
import "./AllPage.css";

export default function AllPage() {
  const { error, loading, data } = useProductItem();

  if (loading) return <div>...spinner</div>;
  if (error) return <div>smthg wnt wrng</div>;

  return (
    <div className="AllPage">
      <h1>{data.category.name}</h1>
      <div className="itemsSection">
        {data.category.products.map((item) => {
          return (
            <div>
              <Link key={item.id} to={`/${item.id}`}>
                <div className="imgSize">
                  <img src={item.gallery[0]} alt="product" />
                </div>
                <h3>{item.name}</h3>
              </Link>
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
    </div>
  );
}
