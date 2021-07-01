import { ReactElement } from 'react';

export type TCompany = {
    id: number,
    name: string,
    found_date: number,
    description: string,
    headquarter: string,
    technologies: string,
    developer: number,
    tm_rating: number
};

export type TResponse = {
  code: number,
  type: string,
  message: string
};

export interface IModalWindow {
  children: ReactElement,
  onClose: (id?: any) => void,
};

export interface ICompaniesListItemProps {
  id: number,
  name: string,
  rating: number,
  headquarter: string,
  employees: number,
  handleClick: (id?: any) => void
};

export interface IModalContentProps {
  company: TCompany | undefined,
  additionalInfo: TExtraInfo | null,
  children: ReactElement
};

export type TExtraInfo = {
  code: number,
  type: string,
  message: string
};

export interface ICompaniesListProps {
  companies: TCompany[],
  handleClick: (id: number) => void
};

export type TRequest = {
  company: TCompany | undefined,
  userName: string,
  userEmail: string,
};

export interface IUserFormProps {
  company: TCompany | undefined,
  onCustomSubmit: (data: TRequest) => void 
};

export interface ICustomInputProps {
  type: string,
  value: string,
  placeholder: string,
  onHandleChange: any
};