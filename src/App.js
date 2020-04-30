import React from 'react';
import { Title } from './layout';
import LinksList from './components/LinksList';
import AddLink from './components/AddLink';

function App() {
  return (
    <div className="App">
      <Title>Boom Karks</Title>
      <LinksList />
      <AddLink />
    </div>
  );
}

export default App;
