import {abbrev_to_num} from './abbreviations';

describe('abbrev_to_num', () => {
  it('returns a pure number', () => {
    expect(abbrev_to_num('1')).toEqual(1);
    expect(abbrev_to_num('2')).toEqual(2);
  });

  it('handles thousands (k)', () => {
    expect(abbrev_to_num('1k')).toEqual(1000);
    expect(abbrev_to_num('1.5k')).toEqual(1500);
  });

  it('handles millions (M)', () => {
    expect(abbrev_to_num('1M')).toEqual(1000000);
    expect(abbrev_to_num('1.5M')).toEqual(1500000);
  });

  it('handles billions (B)', () => {
    expect(abbrev_to_num('1B')).toEqual(Math.pow(10, 9));
    expect(abbrev_to_num('1.5B')).toEqual(1.5 * Math.pow(10, 9));
  });

  it('handles trillions (T)', () => {
    expect(abbrev_to_num('1T')).toEqual(Math.pow(10, 12));
    expect(abbrev_to_num('1.5T')).toEqual(1.5 * Math.pow(10, 12));
  });

  it('handles quadrillions (q)', () => {
    expect(abbrev_to_num('1q')).toEqual(Math.pow(10, 15));
    expect(abbrev_to_num('1.5q')).toEqual(1.5 * Math.pow(10, 15));
  });

  it('handles quintillions (Q)', () => {
    expect(abbrev_to_num('1Q')).toEqual(Math.pow(10, 18));
    expect(abbrev_to_num('1.5Q')).toEqual(1.5 * Math.pow(10, 18));
  });

  it('handles sextillions (s)', () => {
    expect(abbrev_to_num('1s')).toEqual(Math.pow(10, 21));
    expect(abbrev_to_num('1.5s')).toEqual(1.5 * Math.pow(10, 21));
  });

  it('handles septillions (S)', () => {
    expect(abbrev_to_num('1S')).toEqual(Math.pow(10, 24));
    expect(abbrev_to_num('1.5S')).toEqual(1.5 * Math.pow(10, 24));
  });

  it('handles octillions (o)', () => {
    expect(abbrev_to_num('1o')).toEqual(Math.pow(10, 27));
    expect(abbrev_to_num('1.5o')).toEqual(1.5 * Math.pow(10, 27));
  });

  it('handles nonillions (N)', () => {
    expect(abbrev_to_num('1N')).toEqual(Math.pow(10, 30));
    expect(abbrev_to_num('1.5N')).toEqual(1.5 * Math.pow(10, 30));
  });

  it('handles decillions (d)', () => {
    expect(abbrev_to_num('1d')).toEqual(Math.pow(10, 33));
    expect(abbrev_to_num('1.5d')).toEqual(1.5 * Math.pow(10, 33));
  });

  it('handles undecillions (U)', () => {
    expect(abbrev_to_num('1U')).toEqual(Math.pow(10, 36));
    expect(abbrev_to_num('1.5U')).toEqual(1.5 * Math.pow(10, 36));
  });

  it('handles duodecillions (D)', () => {
    expect(abbrev_to_num('1D')).toEqual(Math.pow(10, 39));
    expect(abbrev_to_num('1.5D')).toEqual(1.5 * Math.pow(10, 39));
  });

  it('handles whatevers (Td)', () => {
    expect(abbrev_to_num('1Td')).toEqual(Math.pow(10, 42));
    expect(abbrev_to_num('1.5Td')).toEqual(1.5 * Math.pow(10, 42));
  });

  it('handles whatevers (qd)', () => {
    expect(abbrev_to_num('1qd')).toEqual(Math.pow(10, 45));
    expect(abbrev_to_num('1.5qd')).toEqual(1.5 * Math.pow(10, 45));
  });

  it('handles whatevers (Qd)', () => {
    expect(abbrev_to_num('1Qd')).toEqual(Math.pow(10, 48));
    expect(abbrev_to_num('1.5Qd')).toEqual(1.5 * Math.pow(10, 48));
  });

  it('handles whatevers (sd)', () => {
    expect(abbrev_to_num('1sd')).toEqual(Math.pow(10, 51));
    expect(abbrev_to_num('1.5sd')).toEqual(1.5 * Math.pow(10, 51));
  });

  it('handles whatevers (Sd)', () => {
    expect(abbrev_to_num('1Sd')).toEqual(Math.pow(10, 54));
    expect(abbrev_to_num('1.5Sd')).toEqual(1.5 * Math.pow(10, 54));
  });
});
