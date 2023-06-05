const getAllCollectionsPathsQuery = `
query {
  collections(first: 100) {
    edges {
      node {
        handle
      }
    }
  }
}
`;

export default getAllCollectionsPathsQuery