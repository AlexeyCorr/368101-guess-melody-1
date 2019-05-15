import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';

const mock = {
  scr: `soerce`,
  isPlaying: false
};

it(`AudioPlayer is rendered correctly`, () => {
  const tree = renderer.create(<AudioPlayer
    isPlaying={mock.isPlaying}
    onPlayButtonClick={jest.fn()}
    src={mock.src}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
