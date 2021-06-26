import { ReactElement, useCallback, useState, FC } from "react";
import CompaniesList from "../CompaniesList";
import ModalWindow from "../ModalWindow";
import ModalContent from "../ModalContent";
import { IModalContent } from "../../types";
import MOCK_DATA from "../../companiesMock.json";
import './index.scss';


const MainPage: FC = (): ReactElement => {
  const [state, setState] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<IModalContent>();

  const getSelectedCompany = (id: number): void => {
    const searchable = MOCK_DATA.filter((item) => item.id === id);
    setSelectedCompany(searchable[0]);
  };

  const toggleModalWindow = useCallback((id) => {
    getSelectedCompany(id);
    setState(!state);
  },[state]);

  return (
    <div className="main-page">
      <CompaniesList companies={MOCK_DATA} handleClick={toggleModalWindow} />
      {state && (
        <ModalWindow onClose={toggleModalWindow}>
          <ModalContent {...selectedCompany} />
        </ModalWindow>)}
    </div>
  );
}

export default MainPage;