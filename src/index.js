import React from 'react';
import ReactDOM from 'react-dom';
import questions, {gameSettings} from './mocks/questions.js';

import App from './components/app/app.jsx';

const init = (gameQuestions) => {
  const {errorCount, gameTime} = gameSettings;

  ReactDOM.render(
      <App
        errorCount={errorCount}
        gameTime={gameTime}
        questions={gameQuestions}
      />,
      document.querySelector(`.main`)
  );
};

init(questions);
