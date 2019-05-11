import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `path`,
          genre: `rock`,
        },
      ],
    },
    {
      type: `artist`,
      song: {
        artist: `One`,
        src: ``,
      },
      answers: [
        {
          picture: ``,
          artist: `One`,
        },
      ],
    }
  ],
};

it(`renders correctly`, () => {
  const {questions} = mock;
  const tree = renderer
    .create(<App
      gameTime={0}
      errorCount={0}
      questions={questions}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
