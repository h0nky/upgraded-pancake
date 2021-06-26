import { FC, ReactElement } from "react";
import CompaniesListItem from "../CompaniesListItem";
import { TCompany } from "../../types";
import "./index.scss";

const CompaniesList: FC<{
  companies: TCompany[],
  handleClick: (id: any) => any
}> = ({
  companies,
  handleClick
}): ReactElement => (
  <ul className="companies-list">
    {companies.map((company: TCompany, index: number) =>
      <CompaniesListItem
        key={company.id}
        id={company.id}
        name={company.name}
        rating={company.tm_rating}
        handleClick={handleClick}
      />)}
  </ul>
);

export default CompaniesList; 