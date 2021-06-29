import { ReactElement, useCallback, useState, FC } from "react";
import CompaniesList from "../CompaniesList";
import ModalWindow from "../ModalWindow";
import ModalContent from "../ModalContent";
import SearchBox from "../SearchBox";
import { useGet } from "restful-react";
import { IModalContent, TCompany } from "../../types";
import UserForm from "../UserForm";
import './index.scss';


const MainPage: FC = (): ReactElement => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<IModalContent>();

  const { data, loading } = useGet({ path: '/companies' });

  const getSelectedCompany = useCallback((id: number): void => {
    const searchable = data?.filter((item: TCompany) => item.id === id);
    setSelectedCompany(searchable[0]);
  },[data]);

  const toggleModalWindow = useCallback((id) => {
    getSelectedCompany(id);
    setModalState(!modalState);
  },[getSelectedCompany, modalState]);

  const onCompanySearch = useCallback((value) => {
    setSearchValue(value);
  },[]);

  if (loading) return <p>Loading...</p> // TODO: Move to separate file
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
          <ModalContent {...selectedCompany}>
            <UserForm />
          </ModalContent>
        </ModalWindow>)}
    </div>
  );
}

export default MainPage;