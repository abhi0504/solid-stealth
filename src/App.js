import './App.css';
import Header from './components/Header';
import FirstPageData from './components/firstPageData';
import { useState, useEffect } from 'react'
import SecondPage from './components/SecondPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const App = () => {

  const [item, setItem] = useState('');
  const [p1, setP1] = useState(true);


  const switchHandler = () => {
    setP1(!p1)
    console.log(p1);
  }

  const dataFetcher = (data) => {
    setItem(data);
  }

  return (
    <div className="App">
      <Header p1={p1} switchHandler={switchHandler} dataFetcher={dataFetcher} title="Hacker News"></Header>
      {p1 ? <FirstPageData item={item} /> : <SecondPage />}

    </div>
  );
}

export default App;
