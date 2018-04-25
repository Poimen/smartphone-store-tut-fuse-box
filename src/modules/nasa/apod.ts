import NASA_API_KEY from './api-keys';
import { IApiDetails, INasaApiHandler } from './api.interfaces';

const APOD_API: string = 'https://api.nasa.gov/planetary/apod';

class ApodApiDetails implements IApiDetails {
  url: string;
  apikey: string;

  constructor() {
    this.url = APOD_API;
    this.apikey = NASA_API_KEY;
  }
}

class ApodApi implements INasaApiHandler {
  fetchImageUrl(): string {
    return '';
  }
}

export default ApodApi;
