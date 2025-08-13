import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/store.js'
import {Provider} from "react-redux";
import ScrollToTop from './ReuseableComponents/ScrollToTop.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <ScrollToTop />
    <App />
  </BrowserRouter>
  </Provider>
)
