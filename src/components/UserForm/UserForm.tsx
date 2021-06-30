import { useState, FormEvent, ChangeEvent } from "react";
import { FC, ReactElement } from "react";
import CustomInput from "../CustomInput";
import { useMutate } from "restful-react";
import { IModalContent } from "../../types";
import './index.scss';


const UserForm: FC<{ company: IModalContent | undefined }> = ({ company }): ReactElement => {
  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  // const [error, setError] = useState('');

  const { mutate: postData } = useMutate({ verb: 'POST', path: '/talentInterest' });

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!(userName.length && userEmail.length)) return;

    postData({
      id: company?.id,
      email: userEmail,
      name: userName,
      company
    });
  };
  
  return (
    <div className="user-form__container">
      <h4>Want to know more about company? Fill in the form below!</h4>
      <form className="user-form" onSubmit={onFormSubmit}>
        <CustomInput
          inputName="userName"
          type="text"
          value={userName}
          placeholder="Enter your name"
          onHandleChange={(e: ChangeEvent<HTMLFormElement>) => setName(e.target.value)}
        />
        <CustomInput
          inputName="userEmail"
          type="text"
          value={userEmail}
          placeholder="Enter your email"
          onHandleChange={(e: ChangeEvent<HTMLFormElement>) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;