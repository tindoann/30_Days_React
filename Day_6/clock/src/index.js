import React from 'react';
import ReactDOM from 'react-dom';
import './font-awesome/css/font-awesome.css'; 
import './index.css';
import Timer from './Timer'; 

 export const load = () =>  {
   ReactDOM.render(<Timer />, document.getElementById('demo1')
  ); 
}

try {
  load();
} catch (e) {}

