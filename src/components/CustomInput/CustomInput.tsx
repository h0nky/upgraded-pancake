import { FC, ReactElement } from "react";
import { ICustomInputProps } from "../../types";
import './index.scss';

const CustomInput: FC<ICustomInputProps> = ({
  type,
  value,
  placeholder,
  onHandleChange
}): ReactElement => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onHandleChange}
  />
);

export default CustomInput;