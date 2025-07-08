import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2000-09-21T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const Coffee = () => {
  const start = new Date('2025-07-01');
  const end = Date.now();
  let coffee = 2300;// coffee count on date 2025-07-01

  while (end > start) {
    coffee += 1;
    start.setDate(start.getDate() + 1);
  }

  return coffee;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'city',
    label: 'Current city',
    value: 'Palwal',
  },
  {
    key: 'coffee',
    label: 'Cups of chai/coffee',
    value: <Coffee />,
  },
  {
    key: 'FavBeverage',
    label: 'Favorite beverage',
    value: 'Black Current Shake',
  },
  {
    key: 'MusicHours',
    label: 'Weekly music hours',
    value: 18,
  },
  {
    key: 'AvgSleep',
    label: 'Average sleep per night',
    value: 6.8,
  },
  {
    key: 'BooksThisYear',
    label: 'Books read this year',
    value: '12',
  },
  {
    key: 'TotalBooks',
    label: 'Total books read',
    value: 86,
  },
  {
    key: 'Cities',
    label: 'Cities visited',
    value: 4,
  },
  {
    key: 'TopDestination',
    label: 'Travel destination wish',
    value: 'Switzerland',
  },
];

export default data;
