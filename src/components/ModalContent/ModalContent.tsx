import { FC, ReactElement } from "react";
import DummyChart from "../DummyChart";
import { IModalContent } from "../../types";
import './index.scss';


const ModalContent: FC<IModalContent> = ({
  description,
  developer,
  found_date,
  headquarter,
  name,
  technologies,
  tm_rating,
  children,
}): ReactElement => {
  return (
    <div className="modal-content">
      <h2 className="modal-content__header">{name}</h2>
      <h3>{headquarter}</h3>
      <div className="modal-content__text">
        <p>Found in:</p>
        <span>{found_date}</span>
      </div>
      <div className="modal-content__text">
        <p>Employees:</p>
        <span>{developer}</span>
      </div>
      <div className="modal-content__text">
        <p>Technologies:</p>
        <span>{technologies}</span>
      </div>
      <div className="modal-content__text">
        <p>Rating:</p>
        <span>{tm_rating}</span>
      </div>
      <div className="modal-content__summary">
        <p>Company description:</p>
        <span>{description}</span>
      </div>
      <DummyChart />
      {children}
    </div>
  );
};

export default ModalContent;