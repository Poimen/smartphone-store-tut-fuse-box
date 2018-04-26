
export interface IApiDetails {
  url: string;
  apikey: string;
}

export interface INasaApiHandler {
  fetchImageUrl(): string;
}
