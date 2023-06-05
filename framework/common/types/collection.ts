export type Collection = {
    node: {
      handle: string;
    };
  };
  
export type CollectionResponse = {
    collections: {
      edges: Collection[];
    };
  };