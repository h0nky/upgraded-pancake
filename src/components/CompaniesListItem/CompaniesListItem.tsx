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
  const ref = useRef<HTMLLIElement>(null);

  const onHandleItemClick = () => {
    const idFromRef = ref.current && Number(ref.current.id);
    handleClick(idFromRef);
  };

  return (
    <li
      ref={ref}
      id={String(id)}
      onClick={onHandleItemClick}
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