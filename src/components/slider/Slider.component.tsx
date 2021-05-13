import React, { useRef, useState, FC, ComponentProps, useMemo } from 'react';
import { coinbaseCurrencies } from '../../redux/coinbase/coinbaseSlice';

import { SliderContainer, SliderWrapper, SliderBack, SliderNext } from './Slider.styles';

interface ISlider {
  slides: any[];
  Slide: React.FC<any>;
}

const Slider: FC<ISlider> = ({ slides, Slide }) => {
  const [left, setLeft] = useState(0);
  const [transformLeft, setTransformLeft] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const divRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const nextSlide = () => {
    if (left === (slides.length - 1) * -100) return;
    setLeft(left - 100);
  };

  const prevSlide = () => {
    if (left === 0) return;
    setLeft(left + 100);
  };

  const transformZero = () => {
    setTransformLeft(0);
  };

  const MemoSLIDES = useMemo(
    () =>
      slides.map((slide) => {
        return (
          <div key={`${slide.id}`} style={{ padding: '15px', minWidth: '100%' }}>
            <Slide {...slide}></Slide>
          </div>
        );
      }),
    [slides]
  );

  return (
    <SliderContainer
      onTouchStart={(event) => {
        setTouchStart(event.changedTouches[0].clientX);
      }}
      onTouchEnd={(event) => {
        if (event.changedTouches[0].clientX > touchStart + 50) {
          prevSlide();
        } else if (event.changedTouches[0].clientX < touchStart - 50) {
          nextSlide();
        }
        transformZero();
      }}
      onMouseDown={(event) => {
        setTouchStart(event.clientX);
      }}
      onMouseUp={(event) => {
        if (event.clientX > touchStart + 50) {
          prevSlide();
        } else if (event.clientX < touchStart - 50) {
          nextSlide();
        }
        transformZero();
      }}
      onTouchMove={(event) => {
        if (
          touchStart - event.changedTouches[0].clientX < -50 ||
          touchStart - event.changedTouches[0].clientX > 50
        ) {
          return false;
        }
      }}
      onWheel={(event) => {
        if (event.deltaY < 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }}
      onTouchCancel={transformZero}>
      <SliderBack onClick={prevSlide}>&#5130;</SliderBack>
      <SliderWrapper
        ref={divRef}
        style={{
          left: `${left}%`,
          transform: `translateX(${transformLeft}px)`,
        }}>
        {MemoSLIDES}
      </SliderWrapper>
      <SliderNext onClick={nextSlide}>&#5125;</SliderNext>
    </SliderContainer>
  );
};

export default Slider;
