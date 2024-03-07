import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PersonCard from './components/PersonCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersonCard lastName={"Giovanna"} firstName={"Giorno"} age={15} hairColor={"Gold"} />
    <PersonCard lastName={"Polnareff"} firstName={"Jean Pierre"} age={24} hairColor={"White"} />
    <PersonCard lastName={"Nero"} firstName={"Risotto"} age={28} hairColor={"Dark-Blue"} />
    <PersonCard lastName={"Vinegar"} firstName={"Doppio"} age={33} hairColor={"Purple"} />
  </React.StrictMode>
);
