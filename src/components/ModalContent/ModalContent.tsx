import { FC, ReactElement } from "react";
import { IModalContent } from "../../types";
import './index.scss';

const ModalContent: FC<IModalContent> = ({
  description,
  developer,
  found_date,
  headquarter,
  name,
  technologies,
  tm_rating
}): ReactElement => {
  return (
    <div className="modal-content">
      <div>{name}</div>
      <div>{description}</div>
      <div>{developer}</div>
      <div>{found_date}</div>
      <div>{headquarter}</div>
      <div>{technologies}</div>
      <div>{tm_rating}</div>
    </div>
  );
};

export default ModalContent;