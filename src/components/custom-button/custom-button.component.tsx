import { memo, FC } from 'react';

import { CustomButtonContainer } from './custom-button.styles';

export type TCustomButton = {
  type?: 'submit' | 'button';
  children?: string;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  onClick?: any;
};

const CustomButton: FC<TCustomButton> = (props) => {
  return <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>;
};

export default memo(CustomButton);
