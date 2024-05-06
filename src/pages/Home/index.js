import React, {useState} from 'react';
import logo from './logo.svg';
import './index.css';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Context from '../../Context/';
import Counter from '../../components/Counter';

function Home() {
  const [total, setTotal] = useState(0);

  return (
    <Context.Provider value={[total, setTotal]}>
    <div className="App">
      <header className="App-header">
        
        {/* <Title title={total}/> */}
        <Counter />
      </header>
    </div>
    </Context.Provider>
  );
}

export default Home;
