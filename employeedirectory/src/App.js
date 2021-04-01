import React, { Component } from "react";
import './App.css';
import Navbar from'./components/Navbar';
import Form from './components/Form';
import Table from './components/Table';
import { get } from "./utils/API";
// import Footer from './components/Footer'

class App extends Component{
  state = {
      users: [],
      sorted: "desc",
      search: ""
  };

  
  componentDidMount() {
    get()
    .then(res => {
      // console.log(res.data.results);
      this.setState({users: res.data.results})
    });
  }

  sortUsers = () => {
    if (this.state.sorted === "desc") {
      const sortedUsers = this.state.users.sort((a, b) =>  (b.name.first.toLocaleLowerCase() > a.name.first.toLocaleLowerCase()) ? 1: -1) 
      this.setState({users: sortedUsers});
      this.setState({sorted: "asc"})
    } else {
      const sortedUsers = this.state.users.sort((a, b) =>  (b.name.first.toLocaleLowerCase() < a.name.first.toLocaleLowerCase()) ? 1: -1)       
      this.setState({users: sortedUsers});
      this.setState({sorted: "desc"})
    }
      
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
         <div className="container">
         <Form onSearch = {this.onSearch}/>
         <Table 
         data = {this.state.search.length > 0 ? this.state.users.filter(users => {return users.name.first.toLowerCase().includes(this.state.search.toLocaleLowerCase())}) : this.state.users}
         handleSort = {this.sortUsers}
         />
         
         {/* <Footer /> */}
       </div>
       </div>
     );
   }
 
 }
 
   export default App
