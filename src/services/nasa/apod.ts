import NASA_API_KEY from './api-keys';
import { IApiDetails, INasaApiHandler } from './api.interfaces';
import * as superagent from 'superagent';
import axios from 'axios';

const APOD_ENDPOINT: string = 'https://api.nasa.gov/planetary/apod';

class ApodApiDetails implements IApiDetails {
  endpoint: string;
  apikey: string;

  constructor() {
    this.endpoint = APOD_ENDPOINT;
    this.apikey = NASA_API_KEY;
  }
}

export class ApodApi implements INasaApiHandler {
  details: IApiDetails;

  constructor() {
    this.details = new ApodApiDetails();
  }

  fetchImageUrl(date: string): Promise<any> {
    let userDate = new Date(date);
    if(!date) {
      userDate = this.getRandomDate();
    }

    const queryDate = this.convertDate(userDate);
    console.log(`query date: ${queryDate}`);

    return axios.get(`http://api.nasa.gov/planetary/apod?api_key=${this.details.apikey}&date=${queryDate}`)
      .then(res => {
        return res.data.url;
      })
      .catch(err => {
        return err;
      });
  }

  getRandomDate(): Date {
    const from = new Date(2000, 0, 1).getTime();
    const to = new Date().getTime();
    return new Date(from + Math.random() * (to - from));
  }

  convertDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }
}

export default ApodApi;
