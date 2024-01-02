import React, { Component, useEffect, useState } from "react";
import About from "./about";
import Contactus from "./contactus";

// export function App() {
//   return (
//    <>
//     <Parent/>
//    </>
//   )
// }

// function Parent()
// {
//   const [name,setName] = useState("Tech World Pvt LTD.");

//   return(<>
//     <div>
//       This is Parent Component.
//     </div>
//     <br/>
//     <ChildA companyName={name}/>
//   </>)

// }

// function ChildA({companyName})
// {
//   return(<>

//    <p>This is ChildA Component.</p>

//    <ChildB companyName={companyName}/>

//   </>)
// }

// function ChildB({companyName})
// {
//   return(<>
//    <p>This is ChildB Component.</p>

//    <ChildC companyName={companyName}/>

//   </>)
// }

// function ChildC({companyName})
// {
//   return(<>
//    <p>This is ChildC Component.</p>
//    <h2> {companyName} </h2>
//   </>)
// }

// export function App() {
//   return (
//    <>

//     <About developerName="Raman Singh" age={50}/>

//     <hr />

//     <br/><br/>

//     <Contactus developerName="Raman Singh" age={20}/>

//    </>
//   )
// }

// export function App() {
//   return (
//    <>

//     <About developerName="Raman Singh" age={33} exp={17}/>

//     <hr />

//     <br/><br/>

//     <Contactus developerName="Raman Singh" age={29} mobileNo={123456}/>

//    </>
//   )
// }

// const Student3 = ()=>{
//   return(<>

//     <h1>Hello</h1>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>

//     <Student2/>

//   </>)
// }

// // let agg=30;
// // export default agg;  //supported in this way

// // const App = () =>{
// //   return(<>
// //    <h1>Hello</h1>
// //   </>)
// // }

// // export default App;

// export function App()
// {
//   return(<>
//    <Student/>
//   </>)
// }

// import { createContext } from "react";
// const myContext = createContext();

// const Student3 = ()=>{
//   return(<>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return <h1>Hello {mydata}</h1>
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>
//     <Student3/>
//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>

//    <myContext.Provider value="Tech World Pvt Ltd.">
//       <Student/>
//    </myContext.Provider>

//   </>)
// }

// const Student3 = ()=>{
//   return(<>
//     <h2>Student 3 Component</h2>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return <h1>Hello {mydata}</h1>
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <h2>Student 2 Component</h2>

//     <myContext.Consumer>
//       {
//         (data)=>{
//            return <h1>Good {data}</h1>
//         }
//       }
//     </myContext.Consumer>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <h2>Student Component</h2>
//     <myContext.Consumer>
//       {
//         (data)=>{
//            return <h1> Better {data}</h1>
//         }
//       }
//     </myContext.Consumer>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>

//    <myContext.Provider value="Tech World Pvt Ltd.">
//       <Student/>
//    </myContext.Provider>

//   </>)
// }

// import { createContext } from "react";
// const myContext = createContext("Tech World Pvt Ltd.");
// const Student3 = ()=>{
//   return(<>
//     <h2>Student 3 Component</h2>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return <h1>Hello {mydata}</h1>
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <h2>Student 2 Component</h2>

//     <myContext.Consumer>
//       {
//         (data)=>{
//            return <h1>Good {data}</h1>
//         }
//       }
//     </myContext.Consumer>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <h2>Student Component</h2>
//     <myContext.Consumer>
//       {
//         (data)=>{
//            return <h1> Better {data}</h1>
//         }
//       }
//     </myContext.Consumer>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>

//       <Student/>

//   </>)
// }

// import { createContext } from "react";
// const myContext = createContext({id:101,name:"Ajeet",age:29});

// const Student3 = ()=>{
//   return(<>
//     <h2>Student 3 Component</h2>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (<>

//            <p>{mydata.id}</p>
//            <p>{mydata.name}</p>
//            <p>{mydata.age}</p>

//           </>)
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <h2>Student 2 Component</h2>

//     <myContext.Consumer>
//       {
//       (mydata)=>{
//         return (<>

//          <p>{mydata.id}</p>
//          <p>{mydata.name}</p>
//          <p>{mydata.age}</p>

//         </>)
//       }
//       }
//     </myContext.Consumer>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <h2>Student Component</h2>
//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (<>

//            <p>{mydata.id}</p>
//            <p>{mydata.name}</p>
//            <p>{mydata.age}</p>

//           </>)
//         }
//       }
//     </myContext.Consumer>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>
//       <Student/>
//   </>)
// }

// import { createContext } from "react";
// const myContext = createContext();

// const Student3 = ()=>{
//   return(<>
//     <h2>Student 3 Component</h2>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (<>

//            <p>{mydata.id}</p>
//            <p>{mydata.name}</p>
//            <p>{mydata.age}</p>

//           </>)
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <h2>Student 2 Component</h2>

//     <myContext.Consumer>
//       {
//       (mydata)=>{
//         return (<>

//          <p>{mydata.id}</p>
//          <p>{mydata.name}</p>
//          <p>{mydata.age}</p>

//         </>)
//       }
//       }
//     </myContext.Consumer>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <h2>Student Component</h2>
//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (<>

//            <p>{mydata.id}</p>
//            <p>{mydata.name}</p>
//            <p>{mydata.age}</p>

//           </>)
//         }
//       }
//     </myContext.Consumer>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>
//     <myContext.Provider value={{id:101,name:"Ajeet",age:29}}>
//       <Student/>
//     </myContext.Provider>

//   </>)
// }

// import { createContext } from "react";
// import myContext from "./store.js";

// const Student3 = ()=>{
//   return(<>
//     <h2>Student 3 Component</h2>

//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (<>

//            <p>{mydata.id}</p>
//            <p>{mydata.name}</p>
//            <p>{mydata.age}</p>

//           </>)
//         }
//       }
//     </myContext.Consumer>

//   </>)
// }

// const Student2 = ()=>{
//   return(<>

//     <h2>Student 2 Component</h2>

//     <myContext.Consumer>
//       {
//       (mydata)=>{
//         return (<>

//          <p>{mydata.id}</p>
//          <p>{mydata.name}</p>
//          <p>{mydata.age}</p>

//         </>)
//       }
//       }
//     </myContext.Consumer>

//     <Student3/>

//   </>)
// }

// const Student = ()=>{
//   return(<>
//     <h2>Student Component</h2>
//     <myContext.Consumer>
//       {
//         (mydata)=>{
//           return (<>

//            <p>{mydata.id}</p>
//            <p>{mydata.name}</p>
//            <p>{mydata.age}</p>

//           </>)
//         }
//       }
//     </myContext.Consumer>
//     <Student2/>
//   </>)
// }

// export function App()
// {
//   return(<>

//       <Student/>

//   </>)
// }

// import { createContext } from "react";
// import myContext from "./store.js";

// class Student3 extends Component {

//   //static contextType = myContext;

//   render() {
//     return (
//       <>
//         <h2>Student 3 Component</h2>

//         <myContext.Consumer>
//           {(mydata) => {
//             return (
//               <>
//                 <p>{mydata.id}</p>
//                 <p>{mydata.name}</p>
//                 <p>{mydata.age}</p>
//               </>
//             );
//           }}
//         </myContext.Consumer>
//       </>
//     );
//   }
// }

// class Student2 extends Component {
//   render() {
//     return (
//       <>
//         <h2>Student 2 Component</h2>

//         <myContext.Consumer>
//           {(mydata) => {
//             return (
//               <>
//                 <p>{mydata.id}</p>
//                 <p>{mydata.name}</p>
//                 <p>{mydata.age}</p>
//               </>
//             );
//           }}
//         </myContext.Consumer>

//         <Student3 />
//       </>
//     );
//   }
// }

// class Student extends Component {
//   render() {
//     return (
//       <>
//         <h2>Student Component</h2>
//         <myContext.Consumer>
//           {(mydata) => {
//             return (
//               <>
//                 <p>{mydata.id}</p>
//                 <p>{mydata.name}</p>
//                 <p>{mydata.age}</p>
//               </>
//             );
//           }}
//         </myContext.Consumer>
//         <Student2 />
//       </>
//     );
//   }
// }

// // export function App() {
// //   return (
// //     <>
// //       <Student />
// //     </>
// //   );
// // }

// export class App extends Component
// {
//  render()
//  {
//   return(<>
//    <Student/>
//   </>)
//  }
// }




import { createContext } from "react";
import myContext from "./store.js";

class Student3 extends Component {
  static contextType = myContext;

  render() {
    return (
      <>
        <h2>Student 3 Component</h2>
        <p>{this.context.id}</p>
        <p>{this.context.name}</p>
        <p>{this.context.age}</p>
        <hr />
      </>
    );
  }
}

class Student2 extends Component {
  static contextType = myContext;
  render() {
    return (
      <>
        <h2>Student 3 Component</h2>
        <p>{this.context.id}</p>
        <p>{this.context.name}</p>
        <p>{this.context.age}</p>
        <hr />
        <Student3/>
      </>
    );
  }
}

class Student extends Component {
  static contextType = myContext;
  render() {
    return (
      <>
        <h2>Student 3 Component</h2>
        <p>{this.context.id}</p>
        <p>{this.context.name}</p>
        <p>{this.context.age}</p>
        <hr />
        <Student2/>
      </>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <>
        <Student />
      </>
    );
  }
}
