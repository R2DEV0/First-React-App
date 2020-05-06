import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="container">
      <PersonCard firstname = {'Kevin'} lastname = {'Chancey'} age = {28} hair = {'blond'}/>
      <PersonCard firstname = {'Bean'} lastname = {'John'} age = {47} hair = {'brown'}/>
      <PersonCard firstname = {'James'} lastname = {'Bond'} age = {50} hair = {'black'}/>
      <PersonCard firstname = {'Luke'} lastname = {'Skywalker'} age = {30} hair = {'blond'}/>
    </div>
  );
}

export default App;
