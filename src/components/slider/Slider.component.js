import React, { useRef, useState } from 'react';

import { SliderContainer, SliderWrapper, SliderBack, SliderNext } from './Slider.styles';

const Slider = ({ slides, SlideComponent }) => {
  const [left, setLeft] = useState(0);
  const [transformLeft, setTransformLeft] = useState(0);
  const [touchStart, setTouchStart] = useState();
  const divRef = useRef();

  const increaseLeft = () => {
    if (left === (slides.length - 1) * -100) return;
    setLeft(left - 100);
  };

  const reduceLeft = () => {
    if (left === 0) return;
    setLeft(left + 100);
  };

  return (
    <SliderContainer
      onTouchStart={(event) => {
        setTouchStart(event.changedTouches[0].clientX);
      }}
      onTouchEnd={(event) => {
        if (event.changedTouches[0].clientX > touchStart + 50) {
          reduceLeft();
        } else if (event.changedTouches[0].clientX < touchStart - 50) {
          increaseLeft();
        }
        setTransformLeft(0);
      }}
      onTouchMove={(event) => {
        if (
          touchStart - event.changedTouches[0].clientX < -50 ||
          touchStart - event.changedTouches[0].clientX > 50
        ) {
          return false
        }
        setTransformLeft(-touchStart + event.changedTouches[0].clientX);
      }}
      onWheel={(event) => {
        // TODO Возможно стоит добавить тротл

        if (event.deltaY < 0) {
          reduceLeft();
        } else {
          increaseLeft();
        }
      }}
      onTouchCancel={() => {
        setTransformLeft(0);
      }}>
      <SliderBack onClick={reduceLeft}>&#5130;</SliderBack>
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
      <SliderNext onClick={increaseLeft}>&#5125;</SliderNext>
    </SliderContainer>
  );
};

export default Slider;
