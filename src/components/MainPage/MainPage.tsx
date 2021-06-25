import { useState } from "react";
import CompaniesList from "../CompaniesList";
import ModalWindow from "../ModalWindow";
import MOCK_DATA from "../../companiesMock.json";
import './index.scss';


const MainPage = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <CompaniesList companies={MOCK_DATA} />
      {state && (
        <ModalWindow onClose={() => setState(true)}>
          <div>CHILDREN</div>
        </ModalWindow>)}
    </div>
  );
}

export default MainPage;