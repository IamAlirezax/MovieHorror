import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' ;
import  Home  from './components/Home';
import  Register  from './components/Register';
import  AvailableMovies  from './components/AvailableMovies';
import Tickets from './components/Tickets';
import  {NoMatch } from './components/NoMatch';
import  { Layout} from './components/Layout';
import { NavigationBar} from './components/NavigationBar';
import { Jumbotron }  from './components/Jumbotron';
import Booking  from './components/Booking';





class App extends Component {
  render(){
  return (
    
    <React.Fragment>
      <NavigationBar />
      <Jumbotron/>
      
     
      <Layout>
        
        
     <Router>
       <Switch>
                <Route exact path="/" component={Home} />
                <Route  path="/AvailableMovies" component={ AvailableMovies} />
                <Route path="/booking" component={Booking} />
                <Route  path="/Register" component={Register} />
                <Route  path="/Tickets" component={Tickets}></Route>
               <Route component={NoMatch} />
     </Switch>
    
     </Router>
     
     </Layout>
    </React.Fragment>
   
  );
  }
  }
export default App;
