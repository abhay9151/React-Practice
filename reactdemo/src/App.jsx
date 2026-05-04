import React from 'react';
import Card from './components/card';

const App = () => {
  return (
    <div className="Container">

      <Card name="Love Babbar"  desc="desc1" style={{ borderRadius: "20px" }} />
      <Card name="Love Babbar" desc="desc2" style={{ borderRadius: "20px" }} />
      <Card name="Love Babbar" desc="desc3" style={{ borderRadius: "20px" }} />
      <Card name="Love Babbar" desc="desc4" style={{ borderRadius: "20px" }} />


    </div>
  );
};

export default App;