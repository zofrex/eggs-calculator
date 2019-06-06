import {chickens_per_hour, chickens_per_hour_away, chicken_boxes_for} from './eggs';

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

describe('chicken_boxes_for', () => {
  it('returns ∞ for 0 population', () => {
    expect(chicken_boxes_for(1, 0, 50)).toEqual(Number.POSITIVE_INFINITY);
  });

  it('returns ∞ for 0 population and rate (target)', () => {
    expect(chicken_boxes_for(0, 0, 50)).toEqual(Number.POSITIVE_INFINITY);
  })

  it('needs one 100% box to double', () => {
    expect(chicken_boxes_for(1000, 1000, 100)).toEqual(1);
  })

  it('needs two just larger than sqrt(2)-1 boxes to double', () => {
    expect(chicken_boxes_for(1000, 1000, 42)).toEqual(2);
  })

  it('needs three just smaller than sqrt(2)-1 boxes to double', () => {
    expect(chicken_boxes_for(1000, 1000, 41)).toEqual(3);
  })

  it('handles 3% boxes', () => {
    expect(chicken_boxes_for(1592, 10000, 3)).toEqual(5);
  })

  it('handles 12% boxes', () => {
    expect(chicken_boxes_for(5735, 10000, 12)).toEqual(4);
  })
});
