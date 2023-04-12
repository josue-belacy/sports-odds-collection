export const calculateOdds = (value) => {
  if (Math.sign(value) === 1) {
    return `+${value}`;
  }

  return value;
};
