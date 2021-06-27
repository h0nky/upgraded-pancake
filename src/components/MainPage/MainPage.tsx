import { ReactElement, useCallback, useState, FC, useEffect } from "react";
import CompaniesList from "../CompaniesList";
import ModalWindow from "../ModalWindow";
import ModalContent from "../ModalContent";
import SearchBox from "../SearchBox";
import { IModalContent } from "../../types";
import MOCK_DATA from "../../companiesMock.json";
import './index.scss';


const MainPage: FC = (): ReactElement => {
  const [companies, setCompanies] = useState(MOCK_DATA);
  const [modalState, setModalState] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<IModalContent>();

  useEffect(() => {
    const filtered = companies.filter((company) => company.name.includes(searchValue));
    setCompanies(filtered);
  },[searchValue]);

  const getSelectedCompany = (id: number): void => {
    const searchable = MOCK_DATA.filter((item) => item.id === id);
    setSelectedCompany(searchable[0]);
  };

  const toggleModalWindow = useCallback((id) => {
    getSelectedCompany(id);
    setModalState(!modalState);
  },[modalState]);

  const onCompanySearch = useCallback((value) => {
    setSearchValue(value);
  },[]);

  return (
    <div className="main-page">
      <SearchBox value={searchValue} handleChange={onCompanySearch} />
      <CompaniesList companies={companies} handleClick={toggleModalWindow} />
      {modalState && (
        <ModalWindow onClose={toggleModalWindow}>
          <ModalContent {...selectedCompany} />
        </ModalWindow>)}
    </div>
  );
}

export default MainPage;