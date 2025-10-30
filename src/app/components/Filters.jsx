'use client';

import { useState } from 'react';

const Filters = () => {
  const [activeTransport, setActiveTransport] = useState('Ж/Д');
  const [selectedDate, setSelectedDate] = useState('2024-10-22');

  const transportTabs = ['Ж/Д', 'Авиа', 'Автобусы'];

  const priceCalendarData = [
    { date: '2024-10-20', day: 'пн', price: '5020 ₽' },
    { date: '2024-10-21', day: 'вт', price: '5150 ₽' },
    { date: '2024-10-22', day: 'ср', price: '4980 ₽' },
    { date: '2024-10-23', day: 'чт', price: '5300 ₽' },
    { date: '2024-10-24', day: 'пт', price: '5450 ₽' },
    { date: '2024-10-25', day: 'сб', price: '5600 ₽' },
    { date: '2024-10-26', day: 'вс', price: '5500 ₽' },
  ];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('ru-RU', { month: 'short' }).replace('.', '');
    return `${day} ${month}`;
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg mx-auto max-w-full sm:max-w-2xl lg:max-w-4xl font-sans text-white">
      <div className="flex flex-wrap bg-gray-700 rounded-full p-1 mb-4 gap-1">
        {transportTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTransport(tab)}
            className={`flex-1 sm:flex-none sm:px-6 py-2 text-center rounded-full transition-colors duration-200 ease-in-out text-sm sm:text-base ${
              activeTransport === tab
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-300 hover:bg-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 text-xs sm:text-sm mb-4">
        <button className="bg-gray-700 hover:bg-gray-600 px-3 sm:px-4 py-2 rounded-full transition-colors">Фильтры</button>
        <button className="bg-gray-700 hover:bg-gray-600 px-3 sm:px-4 py-2 rounded-full transition-colors">Есть места</button>
        <button className="bg-gray-700 hover:bg-gray-600 px-3 sm:px-4 py-2 rounded-full transition-colors">Нижние места</button>
        <button className="bg-gray-700 hover:bg-gray-600 px-3 sm:px-4 py-2 rounded-full transition-colors">Тип вагона</button>
      </div>

      <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700">
        <div className="flex lg:grid lg:grid-cols-4 xl:grid-cols-5 gap-2 min-w-max lg:min-w-0">
          {priceCalendarData.map((item) => (
            <button
              key={item.date}
              onClick={() => setSelectedDate(item.date)}
              className={`flex flex-col items-center p-3 rounded-lg transition-colors duration-200 ease-in-out flex-shrink-0 w-24 sm:w-28 ${
                selectedDate === item.date ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              <span className="text-xs sm:text-sm">{formatDate(item.date)}, {item.day}</span>
              <span className="font-bold mt-1 text-sm sm:text-base">{item.price}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
