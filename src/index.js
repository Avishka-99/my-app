import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

  /*const productSchema= new mongoose.Schema({});
  const product = mongoose.model("products",productSchema);
  const data = async()=> {await product.find()};
  console.warn(data);*/

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
