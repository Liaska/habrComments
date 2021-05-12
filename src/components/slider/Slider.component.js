import React, { useRef, useState } from 'react';

import { SliderContainer, SliderWrapper, SliderBack, SliderNext } from './Slider.styles';

const Slider = ({ slides, SlideComponent }) => {
  const [left, setLeft] = useState(0);
  const [transformLeft, setTransformLeft] = useState(0);
  const [touchStart, setTouchStart] = useState();
  const divRef = useRef();

  const nextSlide = () => {
    if (left === (slides.length - 1) * -100) return;
    setLeft(left - 100);
  };

  const prevSlide = () => {
    if (left === 0) return;
    setLeft(left + 100);
  };

  const moveSlider = (event, eventType = event.clientX) => {
    if (touchStart - eventType < -50 || touchStart - eventType > 50) {
      return false;
    }
    setTransformLeft(-touchStart + eventType);
  };

  const transformZero = () => {
    setTransformLeft(0);
  };

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
      onTouchMove={(event) => moveSlider(event, event.changedTouches[0].clientX)}
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
        {slides.length > 0 &&
          slides.map((slide) => {
            return (
              <div key={slide.id} style={{ padding: '15px', minWidth: '100%' }}>
                <SlideComponent {...slide}></SlideComponent>
              </div>
            );
          })}
      </SliderWrapper>
      <SliderNext onClick={nextSlide}>&#5125;</SliderNext>
    </SliderContainer>
  );
};

export default Slider;
