import React from 'react'
import ReactDOM from 'react-dom/client'
// import {BrowserRouter, Route, Routes} from "react-router-dom";

import App from './App.tsx'
// import CustomTimeline from './components/CustomTimeline'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
        {/*<CustomTimeline/>*/}
        {/*<BrowserRouter>*/}
        {/*    <Routes>*/}
        {/*        <Route path="/personal-website-v2/" element={<App/>}>*/}
        {/*            <Route index element={<App/>}/>*/}
        {/*            <Route path="/personal-website-v2/journey" element={<CustomTimeline/>}/>*/}
        {/*            /!*              <Route path="*" element={<NoPage />} />*!/*/}
        {/*        </Route>*/}
        {/*    </Routes>*/}
        {/*</BrowserRouter>*/}
    </React.StrictMode>,
)
