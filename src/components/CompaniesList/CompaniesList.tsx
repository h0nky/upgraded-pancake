import { FC, ReactElement } from "react";
import CompaniesListItem from "../CompaniesListItem";
import { TCompany } from "../../types";
import "./index.scss";

const TITLES = ['ID', 'COMPANY NAME', 'HEADQUARTER', 'RATING', 'EMPLOYEES'];

const CompaniesList: FC<{
  companies: TCompany[],
  handleClick: (id: any) => any
}> = ({
  companies,
  handleClick
}): ReactElement => (
  <div className="companies-list">
    <ul className="companies-list__head">
      {TITLES.map((title, index) => <li key={index}>{title}</li>)}
    </ul>
    <ul className="companies-list__body">
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
);

export default CompaniesList; 