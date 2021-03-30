import React, { Component } from "react";
import './App.css';
import Navbar from'./components/Navbar';
import Form from './components/Form';
import Table from './components/Table';
// import API from "./utils/API";
import { get } from "./utils/API";
// import TableRows from "./components/TableRows";

// import Footer from './components/Footer'

class App extends Component{
  state = {
      users: [],
      userCopy: []
  };

  componentDidMount() {
    get()
    .then(res => {
      console.log(res.data.results);
      this.setState({users: res.data.results})
      this.setState({userCopy: res.data.results})
    });
  }


 render() {
     return (
       <div className="App">
         <Navbar />
         <Form 
        //  value={this.state.search}
        //  handleInputChange={this.setState}
         />
         <Table 
         data={this.state.users}
         />
         {/* <Footer /> */}
       </div>
     );
   }
 
 }
 
   export default App
