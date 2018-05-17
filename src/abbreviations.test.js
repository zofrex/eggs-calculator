import {abbrev_to_num,num_to_abbrev} from './abbreviations';

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

  it('handles tredecillions (Td)', () => {
    expect(abbrev_to_num('1Td')).toEqual(Math.pow(10, 42));
    expect(abbrev_to_num('1.5Td')).toEqual(1.5 * Math.pow(10, 42));
  });

  it('handles quattordecillions (qd)', () => {
    expect(abbrev_to_num('1qd')).toEqual(Math.pow(10, 45));
    expect(abbrev_to_num('1.5qd')).toEqual(1.5 * Math.pow(10, 45));
  });

  it('handles quindecillions (Qd)', () => {
    expect(abbrev_to_num('1Qd')).toEqual(Math.pow(10, 48));
    expect(abbrev_to_num('1.5Qd')).toEqual(1.5 * Math.pow(10, 48));
  });

  it('handles sexdecillions (sd)', () => {
    expect(abbrev_to_num('1sd')).toEqual(Math.pow(10, 51));
    expect(abbrev_to_num('1.5sd')).toEqual(1.5 * Math.pow(10, 51));
  });

  it('handles septendecillions (Sd)', () => {
    expect(abbrev_to_num('1Sd')).toEqual(Math.pow(10, 54));
    expect(abbrev_to_num('1.5Sd')).toEqual(1.5 * Math.pow(10, 54));
  });
});

describe('num_to_abbrev', () => {
  it('returns a small number', () => {
    expect(num_to_abbrev(1)).toEqual("1");
  });

  it('handles thousands', () => {
    expect(num_to_abbrev(1000)).toEqual("1k");
    expect(num_to_abbrev(1500)).toEqual("1.5k");
    expect(num_to_abbrev(10000)).toEqual("10k");
    expect(num_to_abbrev(100000)).toEqual("100k");
  });

  it('handles millions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 6))).toEqual(  "1M");
    expect(num_to_abbrev(1.5 * Math.pow(10, 6))).toEqual("1.5M");
    expect(num_to_abbrev(10  * Math.pow(10, 6))).toEqual( "10M");
    expect(num_to_abbrev(100 * Math.pow(10, 6))).toEqual("100M");
  });

  it('handles billions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 9))).toEqual(  "1B");
    expect(num_to_abbrev(1.5 * Math.pow(10, 9))).toEqual("1.5B");
    expect(num_to_abbrev(10  * Math.pow(10, 9))).toEqual( "10B");
    expect(num_to_abbrev(100 * Math.pow(10, 9))).toEqual("100B");
  });

  it('handles trillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 12))).toEqual(  "1T");
    expect(num_to_abbrev(1.5 * Math.pow(10, 12))).toEqual("1.5T");
    expect(num_to_abbrev(10  * Math.pow(10, 12))).toEqual( "10T");
    expect(num_to_abbrev(100 * Math.pow(10, 12))).toEqual("100T");
  });

  it('handles quadrillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 15))).toEqual(  "1q");
    expect(num_to_abbrev(1.5 * Math.pow(10, 15))).toEqual("1.5q");
    expect(num_to_abbrev(10  * Math.pow(10, 15))).toEqual( "10q");
    expect(num_to_abbrev(100 * Math.pow(10, 15))).toEqual("100q");
  });

  it('handles quintillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 18))).toEqual(  "1Q");
    expect(num_to_abbrev(1.5 * Math.pow(10, 18))).toEqual("1.5Q");
    expect(num_to_abbrev(10  * Math.pow(10, 18))).toEqual( "10Q");
    expect(num_to_abbrev(100 * Math.pow(10, 18))).toEqual("100Q");
  });

  it('handles sextillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 21))).toEqual(  "1s");
    expect(num_to_abbrev(1.5 * Math.pow(10, 21))).toEqual("1.5s");
    expect(num_to_abbrev(10  * Math.pow(10, 21))).toEqual( "10s");
    expect(num_to_abbrev(100 * Math.pow(10, 21))).toEqual("100s");
  });

  it('handles septillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 24))).toEqual(  "1S");
    expect(num_to_abbrev(1.5 * Math.pow(10, 24))).toEqual("1.5S");
    expect(num_to_abbrev(10  * Math.pow(10, 24))).toEqual( "10S");
    expect(num_to_abbrev(100 * Math.pow(10, 24))).toEqual("100S");
  });

  it('handles octillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 27))).toEqual(  "1o");
    expect(num_to_abbrev(1.5 * Math.pow(10, 27))).toEqual("1.5o");
    expect(num_to_abbrev(10  * Math.pow(10, 27))).toEqual( "10o");
    expect(num_to_abbrev(100 * Math.pow(10, 27))).toEqual("100o");
  });

  it('handles nonillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 30))).toEqual(  "1N");
    expect(num_to_abbrev(1.5 * Math.pow(10, 30))).toEqual("1.5N");
    expect(num_to_abbrev(10  * Math.pow(10, 30))).toEqual( "10N");
    expect(num_to_abbrev(100 * Math.pow(10, 30))).toEqual("100N");
  });

  it('handles decillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 33))).toEqual(  "1d");
    expect(num_to_abbrev(1.5 * Math.pow(10, 33))).toEqual("1.5d");
    expect(num_to_abbrev(10  * Math.pow(10, 33))).toEqual( "10d");
    expect(num_to_abbrev(100 * Math.pow(10, 33))).toEqual("100d");
  });

  it('handles undecillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 36))).toEqual(  "1U");
    expect(num_to_abbrev(1.5 * Math.pow(10, 36))).toEqual("1.5U");
    expect(num_to_abbrev(10  * Math.pow(10, 36))).toEqual( "10U");
    expect(num_to_abbrev(100 * Math.pow(10, 36))).toEqual("100U");
  });

  it('handles duodecillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 39))).toEqual(  "1D");
    expect(num_to_abbrev(1.5 * Math.pow(10, 39))).toEqual("1.5D");
    expect(num_to_abbrev(10  * Math.pow(10, 39))).toEqual( "10D");
    expect(num_to_abbrev(100 * Math.pow(10, 39))).toEqual("100D");
  });

  it('handles tredecillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 42))).toEqual(  "1Td");
    expect(num_to_abbrev(1.5 * Math.pow(10, 42))).toEqual("1.5Td");
    expect(num_to_abbrev(10  * Math.pow(10, 42))).toEqual( "10Td");
    expect(num_to_abbrev(100 * Math.pow(10, 42))).toEqual("100Td");
  });

  it('handles quattordecillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 45))).toEqual(  "1qd");
    expect(num_to_abbrev(1.5 * Math.pow(10, 45))).toEqual("1.5qd");
    expect(num_to_abbrev(10  * Math.pow(10, 45))).toEqual( "10qd");
    expect(num_to_abbrev(100 * Math.pow(10, 45))).toEqual("100qd");
  });

  it('handles quindecillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 48))).toEqual(  "1Qd");
    expect(num_to_abbrev(1.5 * Math.pow(10, 48))).toEqual("1.5Qd");
    expect(num_to_abbrev(10  * Math.pow(10, 48))).toEqual( "10Qd");
    expect(num_to_abbrev(100 * Math.pow(10, 48))).toEqual("100Qd");
  });

  it('handles sexdecillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 51))).toEqual(  "1sd");
    expect(num_to_abbrev(1.5 * Math.pow(10, 51))).toEqual("1.5sd");
    expect(num_to_abbrev(10  * Math.pow(10, 51))).toEqual( "10sd");
    expect(num_to_abbrev(100 * Math.pow(10, 51))).toEqual("100sd");
  });

  it('handles septendecillions', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 54))).toEqual(  "1Sd");
    expect(num_to_abbrev(1.5 * Math.pow(10, 54))).toEqual("1.5Sd");
    expect(num_to_abbrev(10  * Math.pow(10, 54))).toEqual( "10Sd");
    expect(num_to_abbrev(100 * Math.pow(10, 54))).toEqual("100Sd");
  });

  it('handles a lot', () => {
    expect(num_to_abbrev(1   * Math.pow(10, 57))).toEqual(  "1X");
    expect(num_to_abbrev(1.5 * Math.pow(10, 57))).toEqual("1.5X");
    expect(num_to_abbrev(10  * Math.pow(10, 57))).toEqual( "10X");
    expect(num_to_abbrev(100 * Math.pow(10, 57))).toEqual("100X");
  })
});
