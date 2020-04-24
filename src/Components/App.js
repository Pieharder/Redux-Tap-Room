import React from 'react';
import '../App.css';
import Header from './Shared/Header'
import Footer from './Shared/Footer'
import KegControl from './KegControl'

function App() {
  return (
    <React.Fragment>
      <Header />
      <KegControl />
      <Footer />
    </React.Fragment>
  );
}

export default App;
