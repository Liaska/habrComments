import React from 'react';

import { AsideBody, AsideContainer, AsideHeader, AsideItem, AsideList } from './Aside.styles';

const Aside = ({title}) => {
  return (
    <AsideContainer>
      <AsideHeader>
        {title}
      </AsideHeader>
      <AsideBody>
        <AsideList>
          <AsideItem></AsideItem>
        </AsideList>
      </AsideBody>
    </AsideContainer>
  );
};

export default Aside;
