import * as superagent from 'superagent';
import axios from 'axios';
import { NASA_API_KEY } from './api-keys';
import { SimpleDate } from '../utils/simpleDate';
import { IApiDetails, INasaApiHandler } from 'services/nasa/api.interfaces';

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
  private details: IApiDetails;
  private simpleDate: SimpleDate;

  constructor() {
    this.details = new ApodApiDetails();
    this.simpleDate = new SimpleDate();
  }

  fetchImageUrl(date: string): Promise<any> {
    let userDate = new Date(date);
    if(!date) {
      userDate = this.simpleDate.getRandomDateFromYear2000();
    }

    const queryDate = this.simpleDate.convertDate(userDate);
    console.log(`query date: ${queryDate}`);

    return axios.get(`http://api.nasa.gov/planetary/apod?api_key=${this.details.apikey}&date=${queryDate}`)
      .then(res => {
        return res.data.url;
      })
      .catch(err => {
        return err;
      });
  }
}

export default ApodApi;
