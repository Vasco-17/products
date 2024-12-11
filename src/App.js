// // // src/App.js
// // import React from "react";
// // import Navbar from "./components/Navbar";

// // function App() {
// //   return (
// //     <div>
// //       <Navbar />
// //       <main>
// //         <section id="home">Home Section</section>
// //         <section id="about">About Section</section>
// //         <section id="services">Services Section</section>
// //         <section id="contact">Contact Section</section>
// //       </main>
// //     </div>
// //   );
// // }

// // export default App;


// import React from "react";
// import Count from "./Count";


// function App() {
//   // const numbers = [1, 2, 3, 4, 5, 6];
//   // const answer = numbers.map((num) => num * 2);
//   // console.log(answer);
//   // return <div className="App">abc</div>;
//   // const names= ["raj", "sam", "hari"];
//   return(
//     <div className="App">
//       {/* <h1>Name List</h1>
//       <ul>
//         {names.map((name, index)=>(
//           <li key={index}>
//             {name}
//             </li> 
//         ))}
//       </ul> */} 
//    <Count/>
//     </div>
//   );
// }
// export default App;

import react from "react" ;
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from "./pages/Product";
  
function App()
{
  return (
    <Router>
    <div>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Product/>}/>
      
      </Routes>
    </div>
    </Router>
  );
}
export default App;  //export default App;  //export default App;  //export default