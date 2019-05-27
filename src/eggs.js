const HABS = 4;
const MINUTES_PER_HOUR = 60;

export function chickens_per_hour(chickens_per_hab_per_minute) {
  return chickens_per_hab_per_minute * HABS * MINUTES_PER_HOUR;
}

export function chickens_per_hour_away(chickens_per_hab_per_minute, hatchery_calm_percentage) {
    return chickens_per_hour(chickens_per_hab_per_minute) * (1 + hatchery_calm_percentage / 100);
}