import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {BrowserRouter as Router } from "react-router-dom";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import {Route} from 'react-router-dom'
import Charts2 from "./components/Charts2.js"

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [page2, setPage2] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=2&sparkline=true"
      )
      .then(res => setPage2(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" render={props => <Charts coinData={coinData} />} />
      <Route path="/2" render={props => <Charts2 page2={page2} />} />
      
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
