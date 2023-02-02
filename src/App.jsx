
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';
import AppRouter from './Routes/AppRouter';





function App() {
  return (
    <Provider store={store}>
      <AppRouter />

    </Provider>
  );
}

export default App;
