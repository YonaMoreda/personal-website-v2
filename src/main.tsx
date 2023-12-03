import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import earth from './img/8k-earth-nightmap.jpg'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <>
      <img src={earth}/>
      </>
    {/*<App />*/}
  </React.StrictMode>,
)
