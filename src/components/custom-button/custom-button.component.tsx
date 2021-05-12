import React, { FC } from 'react';

import { CustomButtonContainer } from './custom-button.styles';

export type TCustomButton = {
  children?: string;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
};

const CustomButton: FC<TCustomButton> = (props) => {
  console.log(props.children)
  return (
    <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
  );
}

export default CustomButton;
