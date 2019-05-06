import React from 'react';
import WelcomeScreen from './welcome-screen';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      time={0}
      errorCount={0}
      onClickButtonStart={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
