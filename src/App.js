import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Contacts from './components/contact/Contacts'
import Header from './components/layout/Header'
import AddContact from "./components/contact/AddContact";
import {Provider} from './context'
class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
        <Header naming="Practic App"/>
        <AddContact/>
        <Contacts/>
      </div>
      </Provider>
    );
  }
}

export default App;
