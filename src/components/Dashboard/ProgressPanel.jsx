import React from 'react';

import Panel from 'components/Panel/Panel';
import PanelHeader from 'components/Panel/Header';
import Progress from 'containers/Progress';

const ProgressPanel = () => (
  <Panel>
    <PanelHeader>Progress</PanelHeader>
    <Progress />
  </Panel>
);

export default ProgressPanel;
