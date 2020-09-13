import React, {useEffect} from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import { withRouter, Switch, BrowserRouter, Route, useHistory, Redirect} from 'react-router-dom';

const Main = withRouter(({ location }) => {
  
  return (
    <>  
     
    <Switch>       
        <Route path="/" exact component={Home} />    
        
       
     
    </Switch>
    
    </>
  )
    
   
 
})
function App() {
  return (
    <BrowserRouter >
    <Main />
  </BrowserRouter>
  );
}

export default App;
