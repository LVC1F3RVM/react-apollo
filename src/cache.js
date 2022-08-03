import { InMemoryCache, makeVar } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
        // products: {
        //   keyArgs: false,
        //   merge(existing, incoming) {
        //     let products = [];
        //     if (existing && existing.products) {
        //       products = products.concat(existing.products);
        //     }
        //     if (incoming && incoming.launches) {
        //       products = products.concat(incoming.products);
        //     }
        //     return {
        //       ...incoming,
        //       products,
        //     };
        //   },
        // },
      },
    },
  },
});

export const cartItemsVar = makeVar([]);
