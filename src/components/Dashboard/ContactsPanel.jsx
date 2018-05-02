import React from 'react';

import Panel from 'components/Panel/Panel';
import PanelHeader from 'components/Panel/Header';
import ExternalLink from 'components/Secondary/ExternalLink';

const ContactsPanel = () => (
  <Panel>
    <PanelHeader>Follow us</PanelHeader>
    <ExternalLink href="https://t.me/perfect_pitch" gutterBottom>
      Telegram dev channel
    </ExternalLink>
    <ExternalLink href="https://github.com/vkhitev/perfect-pitch">
      GitHub repository
    </ExternalLink>
  </Panel>
);

export default ContactsPanel;
