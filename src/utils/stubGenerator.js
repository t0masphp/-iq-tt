export const generateEarnings = () => {
  const years = [2014, 2015, 2016, 2017,2018];
  return years.map((year, index) => {
    return {
      year: year,
      percent: (100 / years.length)  * (index + 1) * Math.random() ,
      currency: '$',
      opacity: 0.5 + 1 / (index * Math.random() + 1),
      amount: Math.floor(Math.random()*(100000000-100000+index)+100000),
      period: 'per month'
    };
  });
};
