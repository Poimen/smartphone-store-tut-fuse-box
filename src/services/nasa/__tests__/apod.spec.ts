import axios from 'axios';
import * as mockdate from 'mockdate';
import MockAdaptor from 'axios-mock-adapter';
import { INasaApiHandler } from 'services/nasa/api.interfaces';
import { ApodApi } from '../apod';
import { NASA_API_KEY } from '../api-keys';

describe(' - Service - nasa - ApodApi', () => {
  let apod: INasaApiHandler, axiosMock: MockAdaptor;

  beforeAll(() => {
    axiosMock = new MockAdaptor(axios);
  });

  beforeEach(() => {
    apod = new ApodApi();
  });

  describe('when fetching image url', () => {
    let url: string, expectedUrl: string;
    beforeEach(async () => {
      expectedUrl = 'http://www.example.com/image/link';

      Math.random = jest.fn(() => 0);

      axiosMock.onGet(`http://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=1999-12-31`)
        .reply(200, {
          url: expectedUrl
        });

      url = await apod.fetchImageUrl('');
    });

    it('should fetch url from apod', () => expect(url).toEqual(expectedUrl));
  });
});
