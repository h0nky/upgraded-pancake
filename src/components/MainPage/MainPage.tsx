import { FC, ReactElement, useMemo, useCallback, useState, ChangeEvent } from "react";
import CompaniesList from "../CompaniesList";
import ModalWindow from "../ModalWindow";
import ModalContent from "../ModalContent";
import CustomInput from "../CustomInput";
import UserForm from "../UserForm";

import useTalentInterest from "../../hooks/useTalentInterest";
import { useGet } from "restful-react";
import { TCompany, TRequest, TExtraInfo } from "../../types";
import { LOADING_TEXT, ERROR_TEXT } from "../../constants";
import './index.scss';


const MainPage: FC = (): ReactElement => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<TCompany|undefined>();
  const [additionalInfo, setAdditionalInfo] = useState<TExtraInfo|null>(null);

  const postAsyncData = useTalentInterest();

  const { data, loading, error } = useGet({ path: '/companies' });

  const getSelectedCompany = useCallback((id: number): void => {
    const searchable = data?.filter((item: TCompany) => item.id === id);
    setSelectedCompany(searchable[0]);
  },[data]);

  const toggleModalWindow = useCallback((id) => {
    getSelectedCompany(id);
    setModalState(!modalState);
  },[getSelectedCompany, modalState]);

  const filterCompanies = useMemo(() => {
    const filtered = data?.filter((company: TCompany) => company.name.includes(searchValue));
    return filtered;
  },[data, searchValue]);

  const onFormSubmit = async (data: TRequest) => {
    const response = await postAsyncData({ ...data });
    setAdditionalInfo(response);
  };

  if (error) return <span className="main-page__error">{ERROR_TEXT}</span>

  return (
    <div className="main-page">
      {loading ? <span className="main-page__loading">{LOADING_TEXT}</span> : (
      <>
        <CustomInput
          type="text"
          value={searchValue}
          placeholder="Search"
          onHandleChange={(e: ChangeEvent<HTMLFormElement>) => setSearchValue(e.target.value)}
        />
        <CompaniesList
          companies={filterCompanies}
          handleClick={toggleModalWindow}
        />
        {modalState && (
          <ModalWindow onClose={toggleModalWindow}>
            <ModalContent company={selectedCompany} additionalInfo={additionalInfo}>
              <UserForm company={selectedCompany} onCustomSubmit={onFormSubmit} />
            </ModalContent>
          </ModalWindow>)}
      </>)}
    </div>
  );
}

export default MainPage;