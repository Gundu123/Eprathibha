// import logo from './logo.svg';
// import ApiCall from './editprofile';
// //import Search from './search';
// //import YourComponent from './viewqns
import Login from "./login";
import ExamsList from "./examlist";
import Question from "./Question";
import Register from "./register";
import Verify from "./verifymail";
import Navbar from "./navbar";
import Finish from "./finishexam";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App(){
  const serverKey = '3w99V63pW7tJ7vavGXtCKo8cp';
    const tokenu = 'nIQXYyECpAkaA7OPmPGU';
    const id = '2928';
    const examid="24"
  return(
    <div>
       
      {/* <Question serverKey={serverKey} tokenu={tokenu} id={id} examid={examid}/>
      */}
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Navbar/>}/>
      <Route path="login" element={<Login serverKey={serverKey} tokenu={tokenu} id={id}/>}/> 
      <Route path="/login/examlist" element={<ExamsList serverKey={serverKey} tokenu={tokenu} id={id}/>}/>
      <Route path="/examlist/:examid/question" element={<Question serverKey={serverKey} tokenu={tokenu} id={id} examid={examid}/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="/register/verify" element={<Verify/>}/>
      <Route path="/examlist/:examid/question/finish" element={<Finish/>}/>
      </Routes>
      
      </BrowserRouter> 
   </div>
  )
}
 export default App;

// import React from 'react';
// import { Provider } from 'react-redux';
// import Store from './redux/store';
// import Component from './redux/dispatch';

// const App = () => {
//   return (
//     <Provider store={Store}>
//       <Component />
//     </Provider>
//   );
// };

// export default App;