import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css'
import Timeline from './Timeline';
import Container from './App';
import Header from './Header';
/* import 'font-awesome/css/font-awesome.css'; */


export const load = () => {
  console.log('Loading day 4');
  ReactDOM.render(<Timeline />, document.getElementById('demo1'));
  ReactDOM.render(<Container />, document.getElementById('demo2'));
  ReactDOM.render(<Header />, document.getElementById('headerDemo'));
};

load();