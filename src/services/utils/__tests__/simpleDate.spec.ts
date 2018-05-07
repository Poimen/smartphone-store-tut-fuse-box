import { SimpleDate } from '../simpleDate'

describe(' - Service - SimpleDate -', () => {
  let simpleDate: SimpleDate;

  beforeEach(() => {
    simpleDate = new SimpleDate();
  });

  describe('when getting a random date', () => {
    it('should generate different dates', () => {
      const date1 = simpleDate.getRandomDateFromYear2000();
      const date2 = simpleDate.getRandomDateFromYear2000();

      expect(date1).not.toBe(date2);
    });
  });

  describe('when converting date', () => {
    it('should convert date to string (kebab case)', () => {
      const converted = simpleDate.convertDate(new Date('2345-12-16'));

      expect(converted).toBe('2345-12-16');
    });
  });
});
