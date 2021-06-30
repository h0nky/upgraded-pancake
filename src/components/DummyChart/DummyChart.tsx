import { FC, ReactElement } from "react";
import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';
import './index.scss';

const mock = [
  { x: 1, y: 10 },
  { x: 2, y: 5 },
  { x: 3, y: 15 }
];

const DummyChart: FC = (): ReactElement => (
  <div className="dummy-chart__container">
    <XYPlot width={300} height={300}>
      <HorizontalGridLines />
      <LineSeries data={mock} />
      <XAxis />
      <YAxis />
    </XYPlot>
  </div>
);

export default DummyChart;