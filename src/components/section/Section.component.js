import React, { Children } from 'react';

import {SectionContainer} from "./Section.styles"

const Section = (props) => {
  return (
    <SectionContainer>
      {props.children}
    </SectionContainer>
  );
}

export default Section;
