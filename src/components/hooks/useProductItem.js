import { useQuery, gql } from "@apollo/client";

const GET_PRODUCT_ITEM = gql`
  query getProductItem {
    category {
      name
      products {
        id
        name
        gallery
        description
        attributes {
          id
          name
          type
          items {
            displayValue
            id
            value
          }
        }
        prices {
          amount
          currency {
            label
            symbol
          }
        }
        brand
      }
    }
  }
`;

export const useProductItem = () => {
  const { error, data, loading } = useQuery(GET_PRODUCT_ITEM);

  return { error, data, loading };
};
