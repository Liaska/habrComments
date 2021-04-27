import React from 'react';

import { LoadingContainer, LoadingOverlay } from './Loading.styles';

const Loading = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <LoadingContainer>
      <LoadingOverlay></LoadingOverlay>
    </LoadingContainer>
  ) : (
    <WrappedComponent {...otherProps}></WrappedComponent>
  );
};

export default Loading;
