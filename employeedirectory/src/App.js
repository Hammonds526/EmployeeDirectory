import React, { Component } from "react";
import axios from 'axios';
// import './App.css';
import Navbar from'./components/Navbar';
import Form from './components/Form';
import TableHeader from './components/Table';
import API from "./utils/API";
import TableRows from "./components/TableRows";

// import Footer from './components/Footer'

class App extends Component{
  state = {
      users: {},
      userCopy: {}
  };
 
  getUsers(res) {
    API.get()
    .then(res = this.setState({users: res.data}));
    console.log(res)
  }

  // componentDidMount() {
  //   this.getUsers() {

  //   }
  // }


 render() {
     return (
       <div className="App">
         <Navbar />
         <Form 
        //  value={this.state.search}
        //  handleInputChange={this.handleInputChange}
         />
         <table>
         <TableHeader />
         <TableRows />
         </table>
         {/* <Footer /> */}
       </div>
     );
   }
 
 }
 
   export default App
