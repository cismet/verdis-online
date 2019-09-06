import { configure } from '@storybook/react';
const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
	//require('../src/stories');
	req.keys().forEach((path) => req(path));
}
configure(loadStories, module);
