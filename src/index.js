import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './styles/styles.scss';
import App from './App';
import Login from './loginpage';

// ReactDOM.render(
//     <React.StrictMode>
//       <Login />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
  


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
 
// ReactDOM.render(<App />, document.getElementById('root'));
