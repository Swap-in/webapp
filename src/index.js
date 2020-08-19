import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('App'),
)

//Para que no se recargue el navegador
if (module.hot) {
  module.hot.accept();
}
