import {configure} from '@storybook/react';

const req = require.context('../src/stories', true, /.stories.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
