'use client';
import React, { useState, useRef } from 'react';
import CardItem from '../CardItem/CardItem';
import SvgIcon from '../SvgIcon/SvgIcon';

interface ScrollViewProps {
  data: any[];
}

interface DirectionButtonProps {
  direction: number;
  flag: string;
  handleSlideChange: (direction: number) => void;
  disabled: boolean;
}

function DirectionButton({ direction, flag, handleSlideChange, disabled }: DirectionButtonProps) {
  return (
    // 暂时去掉背景颜色，这个按钮目前是有形状的。
    <button
      className={`absolute ${direction === 0 ? 'left-0' : 'right-0'} top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-xl`}
      onClick={() => handleSlideChange(direction)}
      disabled={disabled}
    >
      <SvgIcon
        name={flag}
        width={24}
        height={24}
      />
    </button>
  );
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
      <div className="flex relative overflow-hidden w-11/12 mx-auto">
        <div
          className="flex transition-transform duration-300 ease-in-out mx-auto"
          ref={containerRef}
          style={{
            transform: `translateX(-${currentSlide * (100 / data.length)}%)`,
            width: `${data.length * 100}%`,
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-4 flex items-center justify-center h-12 bg-gray-200 rounded-3xl mx-2"
              style={{ minWidth: '80px' }}
              onClick={() => handleSelectItem(item)}
            >
              {item.navigation.zh || '应用'}
            </div>
          ))}
        </div>
      </div>
      <div className='relative -top-8 mt-2'>
        <DirectionButton
          direction={0}
          flag="left"
          handleSlideChange={handleSlideChange}
        />
        <DirectionButton
          direction={1}
          flag="right"
          handleSlideChange={handleSlideChange}
        />
      </div>
      <div className="w-full mt-2 p-6 flex flex-wrap justify-start gap-12">
        {currentSelectItem.map((item, index) => (
          <CardItem key={index} item={item} />
        ))}
      </div>
    </>
  );
}
