'use client';
import React, { useState, useRef } from 'react';
import CardItem from '../CardItem/CardItem';
export default function () {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const handleSlideChange = (direction) => {
    const newSlide = direction == 'left' ? currentSlide - 1 : currentSlide + 1;
    const maxSlide = 23;

    // 限制滑动范围
    if (newSlide < 0) {
      return; // 已经是最左边，不进行移动
    } else if (newSlide > maxSlide) {
      return; // 已经是最右边，不进行移动
    }

    setCurrentSlide(newSlide);
  };

  return (
    <>
      <div className="flex relative">
        <div className="flex overflow-x-hidden w-11/12 relative left-1/2 -translate-x-1/2" ref={containerRef}>
          {Array.from({ length: 24 }, (_, index) => (
            <div
              key={index}
              className="w-24 flex items-center justify-center h-10 bg-gray-200 rounded-3xl"
              style={{
                transform: `translateX(${index - currentSlide}00%)`,
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              应用
            </div>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 rounded-md text-white"
          onClick={() => handleSlideChange('left')}
          disabled={currentSlide === 0}
        >
          左移
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-blue-500 rounded-md text-white"
          onClick={() => handleSlideChange('right')}
          disabled={currentSlide === 23}
        >
          右移
        </button>
      </div>
      <div className='w-full mt-2 p-4'>
        <CardItem></CardItem>
      </div>
    </>
  );
}