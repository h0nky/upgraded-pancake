import { useState } from "react";
import { FC, ReactElement } from "react";
import CustomInput from "../CustomInput";
import './index.scss';


const UserForm: FC = (): ReactElement => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onFormSubmit = () => {};
  
  return (
    <div className="user-form__container">
      <h4>Want to know more about company? Fill in the form below!</h4>
      <form className="user-form" onSubmit={onFormSubmit}>
        <CustomInput
          inputName="userName"
          type="text"
          value={name}
          placeholder="Enter your name"
          onHandleChange={(e: any) => setName(e.target.value)}
        />
        <CustomInput
          inputName="userEmail"
          type="text"
          value={email}
          placeholder="Enter your email"
          onHandleChange={(e: any) => setEmail(e.target.value)}
        />
      </form>
      <button onClick={() => {}}>Submit</button>
    </div>
  );
}

export default UserForm;