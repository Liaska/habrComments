import React, { ChangeEventHandler, FC } from 'react';

import { FormInputWrapperContainer, FormInputContainer, FormInputLabel } from './form-input.styles';

type TFormInput = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  name:string,
  type: string
  value: string;
  required: boolean;
};

const FormInput: FC<TFormInput> = ({ onChange, label, ...props }) => {
  return (
    <FormInputWrapperContainer>
      <FormInputContainer onChange={onChange} {...props} />
      {label ? <FormInputLabel>{label}</FormInputLabel> : null}
    </FormInputWrapperContainer>
  );
}

export default FormInput;
