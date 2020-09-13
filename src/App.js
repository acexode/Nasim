import React, {useEffect} from 'react';
import logo from './logo.svg';

import './App.scss';
import Home from './pages/Home/Home';
import { withRouter, Switch, BrowserRouter, Route, useHistory, Redirect} from 'react-router-dom';
import BackendHome from './pages/Home/Backend/BackendHome/BackendHome';
import BeneficiariesTable from './pages/Home/Backend/BackendHome/DataTables/Beneficiaries';

const Main = withRouter(({ location }) => {
  
  return (
    <>  
     
    <Switch>       
        <Route path="/" exact component={Home} />    
        <Route path="/dashboard" exact component={BackendHome} />    
        <Route path="/beneficiaries" exact component={BeneficiariesTable} />    
        
       
     
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
