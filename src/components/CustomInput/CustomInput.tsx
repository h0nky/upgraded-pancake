import { FC, ReactElement } from "react";
import './index.scss';

const CustomInput: FC<{
  inputName: string,
  type: string,
  value: string,
  placeholder: string,
  onHandleChange: any
}> = ({
  inputName,
  type,
  value,
  placeholder,
  onHandleChange
}): ReactElement => (
  <input
    name={inputName}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onHandleChange}
  />
);

export default CustomInput;