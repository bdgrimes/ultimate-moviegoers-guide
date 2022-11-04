export type MovieAccountStates = {
  id: number;
  favorite: boolean;
  rated: {
    value: number;
  };
  watchlist: boolean;
};
