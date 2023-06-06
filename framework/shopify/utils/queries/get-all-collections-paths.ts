const getAllCollectionsPathsQuery = `
query {
  collections(first: 100) {
    edges {
      node {
        handle
        description
      }
    }
  }
}
`;

export default getAllCollectionsPathsQuery