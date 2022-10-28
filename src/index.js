
import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './mainPage';



const App = () =>{
  return <MainPage />
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
