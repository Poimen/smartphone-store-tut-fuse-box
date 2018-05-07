
export class SimpleDate {
  public getRandomDateFromYear2000(): Date {
    const from = new Date(2000, 0, 1).getTime();
    const to = new Date().getTime();
    return new Date(from + Math.random() * (to - from));
  }

  convertDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }
};
