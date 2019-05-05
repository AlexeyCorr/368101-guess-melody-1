import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const settings = {
    gameTime: 7,
    errorCount: 4,
    onClickButtonStart() {
      return 1;
    }
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        onClickButtonStart={settings.onClickButtonStart}
      />,
      document.querySelector(`.main`)
  );
};

init();
