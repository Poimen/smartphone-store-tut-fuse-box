import { INasaApiHandler } from './api.interfaces';
import ApodApi from './apod';

class NasaApi {
  apod: INasaApiHandler;
  constructor() {
    this.apod = new ApodApi();
  }

  getPictureUrlByDate(date: string): string {
    return '';
  }
}

export default NasaApi;

