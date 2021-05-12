import React, { ChangeEventHandler, FC } from 'react';

import { GroupContainer, FormInputContainer, FormInputLabel } from './form-input.styles';

type TFormInput = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
};

const FormInput: FC<TFormInput> = ({ onChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={onChange} {...props} />
    {label ? <FormInputLabel>{label}</FormInputLabel> : null}
  </GroupContainer>
);

export default FormInput;
