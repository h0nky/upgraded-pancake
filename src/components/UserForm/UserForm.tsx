import { useState, FormEvent, ChangeEvent } from "react";
import { FC, ReactElement } from "react";
import CustomInput from "../CustomInput";
import { validateEmail } from "../../utils/utils";
import { IUserFormProps } from "../../types";
import { FORM_VALIDATION_ERROR, USER_FORM_TITLE } from "../../constants";
import './index.scss';


const UserForm: FC<IUserFormProps> = ({ company, onCustomSubmit }): ReactElement => {
  const [userName, setName] = useState<string>('');
  const [userEmail, setEmail] = useState<string>('');
  const [error, setError] = useState<string|boolean>(false);
  
  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // User input check before form submit
    if (!(userName.length && userEmail.length) && !validateEmail(userEmail)) {
      setError(FORM_VALIDATION_ERROR);
      return;
    }

    onCustomSubmit({ company, userName, userEmail });
    setError(false);
  };
  
  return (
    <div className="user-form__container">
      <h4>{USER_FORM_TITLE}</h4>
      <form className="user-form" onSubmit={onFormSubmit}>
        <CustomInput
          type="text"
          value={userName}
          placeholder="Name"
          onHandleChange={(e: ChangeEvent<HTMLFormElement>) => setName(e.target.value)}
          />
        <CustomInput
          type="text"
          value={userEmail}
          placeholder="Email"
          onHandleChange={(e: ChangeEvent<HTMLFormElement>) => setEmail(e.target.value)}
        />
        {error && (<span className="user-form__validation-error">{error}</span>)}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;