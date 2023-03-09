import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from './Greeting';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
   
//     this.state = {
//       name: 'kapil',
//       age: 22,
//     };
//    }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.name()}.</h2>
//         <h2>It is {this.state.age()}.</h2>

//       </div>
//     );
//   }
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Greeting isLoggedIn={"true"}/>
);








reportWebVitals();
