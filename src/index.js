import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

ReactDOM.render(
  <App />,
  document.getElementById('App'),
)

//Para que no se recargue el navegador
if (module.hot) {
  module.hot.accept();
}
