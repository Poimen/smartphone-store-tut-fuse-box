
export interface IApiDetails {
  endpoint: string;
  apikey: string;
}

export interface INasaApiHandler {
  fetchImageUrl(date: string): Promise<string>;
}
