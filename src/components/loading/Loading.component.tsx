import React, { FC, ReactElement } from 'react';

import { LoadingContainer, LoadingOverlay } from './Loading.styles';

interface IWrappedComponent {
  isLoading: boolean,
  [index: string]: any
}

const Loading = (WrappedComponent: React.ComponentType<any | string>)=> {
  const Load: FC<IWrappedComponent> = ({isLoading, ...otherProps}) => {
    return isLoading ? (
      <LoadingContainer>
        <LoadingOverlay></LoadingOverlay>
      </LoadingContainer>
    ) : (
        
      <WrappedComponent {...otherProps}></WrappedComponent>
    );
  }
  return Load;
}


export default Loading;
