import { FC, ReactElement } from "react";
import { TCompany } from "../../types";

const CompaniesList: FC<{ companies: TCompany[] }> = ({ companies }): ReactElement => (
  <ul className="companies-list">
    {companies.map((company: TCompany, index: number) => (
      <li key={index}>
        <div>{company.id}</div>
      </li>
    ))}
  </ul>
);

export default CompaniesList; 