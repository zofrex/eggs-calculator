import {chickens_per_hour, chickens_per_hour_away} from './eggs';

describe('chickens_per_hour', () => {
  it('returns 0 for 0 rate', () => {
    expect(chickens_per_hour(0)).toEqual(0);
  });

  it('returns 720k for 3k rate', () => {
      expect(chickens_per_hour(3000)).toEqual(720000);
  });
});

describe('chickens_per_hour_away', () => {
  it('returns 0 for 0 rate + 100% calm', () => {
    expect(chickens_per_hour_away(0, 100)).toEqual(0);
  })

  it('returns 1.44M for 3k rate + 100% calm', () => {
    expect(chickens_per_hour_away(3000, 100)).toEqual(1440000);
  });

  it('returns 720k for 3k rate + 0% calm', () => {
      expect(chickens_per_hour_away(3000, 0)).toEqual(720000);
  });
});
