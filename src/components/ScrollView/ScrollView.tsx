'use client';
import React, { useState, useRef } from 'react';
import CardItem from '../CardItem/CardItem';

interface ScrollViewProps {
  data: any[];
}

export default function ScrollView({ data }: ScrollViewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSelectItem, setCurrentSelectItem] = useState(data[0].children);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSelectItem = (item: any) => {
    setCurrentSelectItem(item.children);
  };

  const handleSlideChange = (direction: 0 | 1) => {
    const newSlide = direction === 0 ? currentSlide - 1 : currentSlide + 1;
    const maxSlide = Math.ceil(data.length / 2) - 1;

    if (newSlide < 0 || newSlide > maxSlide) return;

    setCurrentSlide(newSlide);
  };

  return (
    <>
      <div className="flex relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          ref={containerRef}
          style={{
            transform: `translateX(-${currentSlide * (100 / data.length)}%)`,
            width: `${data.length * 100}%`,
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex-grow px-4 flex items-center justify-center h-12 bg-gray-200 rounded-3xl mx-2"
              style={{ minWidth: '80px' }}
              onClick={() => handleSelectItem(item)}
            >
              {item.navigation.zh || '应用'}
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 rounded-md text-white"
          onClick={() => handleSlideChange(0)}
          disabled={currentSlide === 0}
        >
          左移
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 rounded-md text-white"
          onClick={() => handleSlideChange(1)}
          disabled={currentSlide >= Math.ceil(data.length / 2) - 1}
        >
          右移
        </button>
      </div>
      <div className="w-full mt-2 p-6 flex flex-wrap justify-start gap-12">
        {currentSelectItem.map((item, index) => (
          <CardItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
