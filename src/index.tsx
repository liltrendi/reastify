import 'react-app-polyfill/ie11';
import * as React from 'react';
import Reastify from './components/reastify';
import { reastify } from './util';

const App = () => {
  return (
    <Reastify />
  )
}

export default App;

export {
  reastify
}