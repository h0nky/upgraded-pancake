import { FC, memo, ReactElement } from "react";
import CompaniesListItem from "../CompaniesListItem";
import { LIST_TITLES } from "../../constants";
import { TCompany, ICompaniesListProps } from "../../types";
import "./index.scss";


const CompaniesList: FC<ICompaniesListProps> = memo(({
  companies,
  handleClick
}): ReactElement => (
  <div className="companies-list">
    <ul className="companies-list__heading">
    {LIST_TITLES.map((title, index) => (
      <li key={index}>
        <span>{title}</span>
      </li>))}
    </ul>
    <ul>
      {companies?.map((company: TCompany, index: number) =>
        <CompaniesListItem
          key={company.id}
          id={company.id}
          name={company.name}
          rating={company.tm_rating}
          headquarter={company.headquarter}
          employees={company.developer}
          handleClick={handleClick}
        />)}
    </ul>
  </div>
));

export default CompaniesList; 