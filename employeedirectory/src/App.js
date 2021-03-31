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
      // userCopyFilter: [],
      search: ""
  };

  
  componentDidMount() {
    get()
    .then(res => {
      console.log(res.data.results);
      this.setState({users: res.data.results})
      // this.setState({userCopyFilter: res.data.results})
    });
  }

  onSearch = (event) => {
    console.log("works")
    // console.log(event.target.value)
    this.setState({search: event.target.value})
    console.log(this.state.search)
  }

 render() {
     return (
       <div className="App">
         <Navbar />
         <Form onSearch = {this.onSearch}
        //  value={this.state.search}
        //  handleInputChange={this.setState}
         />
         <Table 
         data = {this.state.search.length > 0 ? this.state.users.filter(users => {return users.name.first.includes(this.state.search)}) : this.state.users}
         />
         {/* <Footer /> */}
       </div>
     );
   }
 
 }
 
   export default App
