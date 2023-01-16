import './App.css';
import Header from './components/Header';
import FirstPageData from './components/firstPageData';
import { useState,useEffect } from 'react'

const App = () => {

  const [item, setItem] = useState('');
  

  const dataFetcher = (data) => {
    // console.log("DATA HERE");
    // console.log(data);
    setItem(data);
  }

  return (
    <div className="App">
      <Header dataFetcher={dataFetcher} title="Hacker News"></Header>
      <FirstPageData  item={item}/>
    </div>
  );
}

export default App;
