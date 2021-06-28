import { ReactElement, useCallback, useState, FC } from "react";
import CompaniesList from "../CompaniesList";
import ModalWindow from "../ModalWindow";
import ModalContent from "../ModalContent";
import SearchBox from "../SearchBox";
import { useGet } from "restful-react";
import { IModalContent, TCompany } from "../../types";
import './index.scss';


const MainPage: FC = (): ReactElement => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<IModalContent>();

  const { data } = useGet({ path: '/companies' });

  const getSelectedCompany = useCallback((id: number): void => {
    const searchable = data?.filter((item: any) => item.id === id);
    setSelectedCompany(searchable[0]);
  },[data]);

  const toggleModalWindow = useCallback((id) => {
    getSelectedCompany(id);
    setModalState(!modalState);
  },[getSelectedCompany, modalState]);

  const onCompanySearch = useCallback((value) => {
    setSearchValue(value);
  },[]);

  return (
    <div className="main-page">
      <SearchBox
        value={searchValue}
        handleChange={onCompanySearch}
      />
      <CompaniesList
        companies={data?.filter((company: TCompany) => company.name.includes(searchValue))}
        handleClick={toggleModalWindow}
      />
      {modalState && (
        <ModalWindow onClose={toggleModalWindow}>
          <ModalContent {...selectedCompany} />
        </ModalWindow>)}
    </div>
  );
}

export default MainPage;