import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import AdminLogin from "./pages/AdminLogin/AdminLogin"
import Nav from './components/Nav/Nav';

import { withRouter, Switch, BrowserRouter, Route} from 'react-router-dom';
import BackendHome from './pages/Home/Backend/BackendHome/BackendHome';
import BeneficiariesTable from './pages/Home/Backend/BackendHome/DataTables/Beneficiaries';
import BeneficiaryLists from './pages/Home/Backend/Supervisor/BeneficiaryLists';
import Footer from './components/Footer/Footer';

const Main = withRouter(({ location }) => {
  
  return (
    <>  
      {location.pathname != "/adminlogin" && (
        <>
          <Nav />
          <Footer />
        </>
      )}
    <Switch>       
        <Route path="/" exact component={Home} />    
        <Route path="/dashboard" exact component={BackendHome} />    
        <Route path="/beneficiaries" exact component={BeneficiariesTable} />    
        <Route path="/beneficiary-lists" exact component={BeneficiaryLists} />    
        <Route path="/login" exact component={Login} /> 
        <Route path="/adminlogin" exact component={AdminLogin} /> 
        
       
     
    </Switch>
    
    </>
  )
    
   
 
})
function App() {
  return (
    <div>
     
      <BrowserRouter >
        <Main />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
