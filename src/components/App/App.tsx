import { FC, ReactElement } from "react";
import { Context, Provider } from "../../store";
import './App.scss';

const App: FC = (): ReactElement => (
  <Provider>
    <div className="App">
      <header className="App-header" />
      <Context.Consumer>
        {(context: any) => <div />}
      </Context.Consumer>
    </div>
  </Provider>
);

export default App;
