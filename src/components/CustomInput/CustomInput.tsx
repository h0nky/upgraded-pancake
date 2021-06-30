import { FC, ReactElement } from "react";
import './index.scss';

interface ICustomInputProps {
  type: string,
  value: string,
  placeholder: string,
  onHandleChange: any
};

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