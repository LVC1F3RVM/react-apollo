import { useQuery, gql } from "@apollo/client";

export const GET_PRODUCT_DETAIL_ITEM = gql`
  query getProductDetailItem($id: String!) {
    product(id: $id) {
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
`;

export const useProductDetailItem = (id) => {
  const { error, data, loading } = useQuery(GET_PRODUCT_DETAIL_ITEM, {
    variables: {
      id,
    },
  });

  return { error, data, loading };
};
