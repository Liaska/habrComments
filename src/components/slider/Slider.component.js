
import React from 'react';

import {SliderContainer, Slide} from "./Slider.styles"

const Slider = ({slides, SlideComponent}) => {
  return (
    <SliderContainer>
      {
        slides.map(slide => {
          return (
            <SlideComponent >
              
            </SlideComponent>
          )
        }) 
      }
    </SliderContainer>
  );
}

export default Slider;
