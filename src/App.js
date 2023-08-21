import './App.css'
import React, { Component } from 'react';
import NavBar from './components/NavBar';
// yaha pehle function based component tha ab hum class based compnent bana rahe h
import News from './components/News';

import {BrowserRouter, Route, Routes,} from "react-router-dom";
// the above import is done from react router dom website (we are using v6 )



export default class App extends Component {
  render() {
    return (
      <div>

    <BrowserRouter>
        <NavBar/>
          {/* pageSize={5} line 14 mein pass kar sakta h isko */}
       {/* jab bhi mein yaha category ya country change karunga toh uss se related he news dikhegi mujhe */}
       {/* yaha pageSize=5 humne kiya h jo ki props ki madad e kaam News.js mein aayega (this.props.pageSize) se */}
       {/* <News pageSize={5} country='in' category='business'/> */}
     
      <Routes>
      <Route path="/general" element={<News key="general" pageSize={5} country='in' category='general' />} />
       <Route path="/business" element={<News key="business" pageSize={5} country='in' category='business' />} />
       <Route path="/entertainment" element={<News key="entertainment" pageSize={5} country='in' category='entertainment' />} />
       
       <Route path="/health" element={<News key="health" pageSize={5} country='in' category='health' />} />
       <Route path="/science" element={<News key="science" pageSize={5} country='in' category='science' />} />
       <Route path="/sports" element={<News key="sports" pageSize={5} country='in' category='sports' />} />
       <Route path="/technology" element={<News key="technology" pageSize={5} country='in' category='technology' />} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}





// news nayi h ya purani uske liye badge bhi lagta sakta tha mein (lec-32) harry
// infinite scroll bhia dd kar sakte h from (lec-35) harry
// humne jitne bhi class based component banye h unki jagah we can use functions (lec-39) harry
// top loading bar lagana h toh (lec-36) harry

// export default App;
