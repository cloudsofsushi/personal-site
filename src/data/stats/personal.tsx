'use client';

import React, { useEffect, useState } from 'react';

import { StatData } from '../../components/Stats/types';

const Age: React.FC = () => {
  const [age, setAge] = useState<string>('');

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2001-09-21T09:24:00');
    setAge(((Date.now() - birthTime.getTime()) / divisor).toFixed(11));
  };

  useEffect(() => {
    tick(); // Initial tick
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{age}</>;
};

const Coffee = () => {
  const start = new Date('2026-01-01');
  const end = new Date(); // ✅ FIX
  let coffee = 2300;

  while (end.getTime() > start.getTime()) {
    coffee += 1;
    start.setDate(start.getDate() + 1);
  }

  return coffee;
};

const data: StatData[] = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'city',
    label: 'Current city',
    value: 'Faridabad',
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
