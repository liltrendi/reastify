import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Reastify, { reastify } from '../src/'

const App = () => {
  return (
    <div>
      <Reastify />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
