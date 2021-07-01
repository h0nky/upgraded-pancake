import { FC, ReactElement } from "react";
import MainPage from "../MainPage";
import { TMLogo } from "../TMLogo";
import './index.scss';

const App: FC = (): ReactElement => (
    <div className="app">
      <header className="app-header">
        <div className="app-header__logo-container">
          <TMLogo />
        </div>
      </header>
      <MainPage />
    </div>
);

export default App;
