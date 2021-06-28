import { useRef, FC, ReactElement } from "react";
import { ICompaniesListItemProps } from "../../types";
import "./index.scss";

const CompaniesListItem: FC<ICompaniesListItemProps> = ({
  id,
  name,
  rating,
  headquarter,
  employees,
  handleClick
}): ReactElement => {
  const ref = useRef<any>(null);
  return (
    <li
      id={String(id)}
      ref={ref}
      onClick={() => handleClick(+ref.current.id)}
      className="companies-list__item"
    >
      <div>{id}</div>
      <div>{name}</div>
      <div>{headquarter}</div>
      <div>{rating}</div>
      <div>{employees}</div>
    </li>
  );
}

export default CompaniesListItem;