import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyStartupProgress from './Components/MyStartupProgress';
import { store } from './Redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <MyStartupProgress />
      </Provider>

    </div>
  );
}

export default App;
