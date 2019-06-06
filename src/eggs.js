const HABS = 4;
const MINUTES_PER_HOUR = 60;

export function chickens_per_hour(chickens_per_hab_per_minute) {
  return chickens_per_hab_per_minute * HABS * MINUTES_PER_HOUR;
}

export function chickens_per_hour_away(chickens_per_hab_per_minute, hatchery_calm_percentage) {
    return chickens_per_hour(chickens_per_hab_per_minute) * (1 + hatchery_calm_percentage / 100);
}

export function chicken_boxes_for(target, current_chickens, box_size) {
    if(target == 0 && current_chickens == 0) {
        return Number.POSITIVE_INFINITY;
    }

    const target_factor = 1 + target / current_chickens;
    const box_factor = 1 + (box_size / 100);
    return Math.ceil(Math.log(target_factor) / Math.log(box_factor));
}
