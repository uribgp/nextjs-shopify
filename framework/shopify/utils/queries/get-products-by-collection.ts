const getProductsByCollectionQuery = `
query GetProductsByCollection($collectionName: String!) {
    collectionByHandle(handle: $collectionName) {
      products(first: 10) {
        edges {
          node {
            id
            handle
            title
            vendor
            description
            descriptionHtml
            options {
              id
              name
              values
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
            variants(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  title
                  sku
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            images(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  originalSrc
                  altText
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }
`;


export default getProductsByCollectionQuery;