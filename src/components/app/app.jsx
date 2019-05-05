import React from 'react';
import WelcomeScreen from './../welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount, onClickButtonStart} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    onClickButtonStart={onClickButtonStart}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onClickButtonStart: PropTypes.func.isRequired
};

export default App;
