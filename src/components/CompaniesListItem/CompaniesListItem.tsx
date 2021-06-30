import { useRef, FC, ReactElement, memo } from "react";
import { ICompaniesListItemProps } from "../../types";
import "./index.scss";

const CompaniesListItem: FC<ICompaniesListItemProps> = memo(({
  id,
  name,
  rating,
  headquarter,
  employees,
  handleClick
}): ReactElement => {
  const ref = useRef<HTMLLIElement>(null);

  const onHandleItemClick = () => {
    const idFromRef: number | null = ref.current && Number(ref.current.id);
    handleClick(idFromRef);
  };

  return (
    <li
      ref={ref}
      id={String(id)}
      onClick={onHandleItemClick}
      className="companies-list__item"
    >
      <span>{id}</span>
      <span>{name}</span>
      <span>{headquarter}</span>
      <span>{rating}</span>
      <span>{employees}</span>
    </li>
  );
});

export default CompaniesListItem;