import { INasaApiHandler } from './api.interfaces';
import { ApodApi } from './apod';

export class NasaApi {
  apod: INasaApiHandler;
  constructor() {
    this.apod = new ApodApi();
  }

  getPictureOfTheDay(date: string): Promise<string> {
    return this.apod.fetchImageUrl(date);
  }
}
