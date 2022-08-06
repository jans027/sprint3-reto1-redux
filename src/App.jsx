
import React from 'react';
import { Provider } from 'react-redux';
import { Routes1 } from './routes/Routes';
import { store } from './store/store';


function App() {
  return (
    <Provider store={store}>
      <Routes1/>

    </Provider>
  );
}

export default App;
