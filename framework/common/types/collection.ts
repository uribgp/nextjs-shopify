export type Collection = {
    node: {
      handle: string;
      description?: string;
    };
  };
  
export type CollectionResponse = {
    collections: {
      edges: Collection[];
    };
  };