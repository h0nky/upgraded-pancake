import { FC, ReactElement } from "react";
import DummyChart from "../DummyChart";
import { IModalContentProps } from "../../types";
import './index.scss';


const ModalContent: FC<IModalContentProps> = ({ company, additionalInfo, children }): ReactElement => (
  <div className="modal-content">
    <h2 className="modal-content__header">{company?.name}</h2>
    <h3>{company?.headquarter}</h3>
    <div className="modal-content__text">
      <p>Found in:</p>
      <span>{company?.found_date}</span>
    </div>
    <div className="modal-content__text">
      <p>Employees:</p>
      <span>{company?.developer}</span>
    </div>
    <div className="modal-content__text">
      <p>Technologies:</p>
      <span>{company?.technologies}</span>
    </div>
    <div className="modal-content__text">
      <p>Rating:</p>
      <span>{company?.tm_rating}</span>
    </div>
    <div className="modal-content__summary">
      <p>Company description:</p>
      <span>{company?.description}</span>
    </div>
    {additionalInfo && (
      <div className="modal-content__add-info">
        <p>Additional info:</p>
        <span>{additionalInfo.message}</span>
      </div>
    )}
    <DummyChart />
    {children}
  </div>
);

export default ModalContent;