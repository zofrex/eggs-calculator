import round from './round'

const abbreviations = {
  "k": 3,
  "M": 6,
  "B": 9,
  "T": 12,
  "q": 15,
  "Q": 18,
  "s": 21,
  "S": 24,
  "o": 27,
  "N": 30,
  "d": 33,
  "U": 36,
  "D": 39,
  "Td": 42,
  "qd": 45,
  "Qd": 48,
  "sd": 51,
  "Sd": 54,
  "X": 57,
};

export function abbrev_to_num(abbreviation) {
  if (/^[0-9.]*$/.test(abbreviation)) {
    return Number(abbreviation);
  }
  else if (/^[0-9.]*[kMBTqQsSoNdUD]$/.test(abbreviation)) {
    return Number(abbreviation.slice(0, -1)) * Math.pow(10, abbreviations[abbreviation.slice(-1)]);
  }
  else if (/^[0-9.]*[TqQsS]d/.test(abbreviation)) {
    return Number(abbreviation.slice(0, -2)) * Math.pow(10, abbreviations[abbreviation.slice(-2)]);
  }
}

export function num_to_abbrev(num) {
  const oOM = Math.log10(num);

  const max_smaller_than = (maxSoFar, currentItem) => {
    const current = {
      symbol: currentItem[0],
      power: currentItem[1]
    };

    if(current.power <= oOM && current.power > maxSoFar.power) {
      return current;
    }
    else {
      return maxSoFar;
    }
  };

  const magnitude = Object.entries(abbreviations).reduce(max_smaller_than, {symbol: "", power:0});

  return round(num / Math.pow(10, magnitude.power), 3) + magnitude.symbol;
}
