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

// TODO: change undefined
export interface IModalContent {
  description?: string,
  developer?: number,
  found_date?: number,
  headquarter?: string,
  name?: string,
  technologies?: string,
  tm_rating?: number,
  id?: number,
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