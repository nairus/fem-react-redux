// @flow

export type Show = {
  title: string,
  description: string,
  year: string,
  poster: string,
  trailer: string,
  imdbID: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
