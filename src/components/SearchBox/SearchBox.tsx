import { ReactElement, FC } from "react";
import { ISearchBox } from "../../types";
import './index.scss';

const SearchBox: FC<ISearchBox> = ({
  value, handleChange
}): ReactElement => (
  <div className="search-box__container">
    <input
      type="text"
      placeholder="Search"
      value={value}
      className="search-box__input"
      onChange={(e) => handleChange(e.target.value)}
    />
  </div>
);

export default SearchBox;