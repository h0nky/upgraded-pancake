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
  onClose: () => void,
};