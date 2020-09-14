import React, {useEffect} from 'react';
import logo from './logo.svg';

import './App.scss';
import Home from './pages/Home/Home';
import { withRouter, Switch, BrowserRouter, Route, useHistory, Redirect} from 'react-router-dom';
import BackendHome from './pages/Home/Backend/BackendHome/BackendHome';
import BeneficiariesTable from './pages/Home/Backend/BackendHome/DataTables/Beneficiaries';
import BeneficiaryLists from './pages/Home/Backend/Supervisor/BeneficiaryLists';

const Main = withRouter(({ location }) => {
  
  return (
    <>  
     
    <Switch>       
        <Route path="/" exact component={Home} />    
        <Route path="/dashboard" exact component={BackendHome} />    
        <Route path="/beneficiaries" exact component={BeneficiariesTable} />    
        <Route path="/beneficiary-lists" exact component={BeneficiaryLists} />    
        
       
     
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
