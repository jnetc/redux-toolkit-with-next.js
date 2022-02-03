import { FC, useState, MouseEvent } from 'react';
import styled from 'styled-components';

import { updateStatus } from 'redux/features/notificationSlice';
import { useDispatch } from 'react-redux';

import { RadioButton } from '@Components/RadioButton';

const RadioGroupStyle = styled.fieldset.attrs(() => ({
  className: 'radio-group',
}))`
  outline: none;
  border: none;
`;

export const RadioGroup: FC<{
  name: string;
  values: Array<string>;
  defaultRadio?: number;
}> = ({ name, values, defaultRadio = 0 }) => {
  const [isSelected, setSelection] = useState(name + defaultRadio);
  const dispatch = useDispatch();
  const select = (event: MouseEvent<HTMLFieldSetElement>) => {
    const el = event.target as HTMLInputElement;
    setSelection(el.value);
    dispatch(updateStatus(`${name} was updated`));
  };

  const inputs = values.map((item, idx) => (
    <RadioButton
      key={item}
      value={`${name + idx}`}
      name={name}
      isSelected={isSelected}
    >
      {item}
    </RadioButton>
  ));

  return <RadioGroupStyle onChange={select}>{inputs}</RadioGroupStyle>;
};
