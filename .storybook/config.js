import { configure } from '@storybook/react';

function loadStories() {
  require('../src/combineStories/');
}

configure(loadStories, module);
