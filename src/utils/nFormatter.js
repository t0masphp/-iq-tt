const STEPS = [
  {value: 1, symbol: ''},
  {value: 1E3, symbol: 'K'},
  {value: 1E6, symbol: 'mn'},
  {value: 1E9, symbol: 'B'},
];
const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

export const nFormatter = (value, precision) => {
  const step = STEPS.reduce((result, step) => value < step.value ? result : step, STEPS[0]);
  const formattedValue = (value / step.value).toFixed(precision).replace(rx, '$1');
  return {formattedValue, symbol: step.symbol};
};