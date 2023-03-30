import Form from './Components/Form';
import './App.css';
import Welcome from './Pages/Welcome';
import { Route, Switch } from 'react-router-dom';
import DetailsPage from './Pages/DetailsPage';
import SearchPage from './Pages/SearchPage';
import PersonProfile from './Pages/PersonProfile';


function App() {

console.log('App')

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Switch>
      <Route path='/' exact>
      <Welcome/>
      </Route> 
      <Route path='/explore'>
      <SearchPage/>
      </Route> 
       <Route path='/form'>
       <Form/>
      </Route>  
     <Route path='/details' exact>
     <DetailsPage/>
     </Route>
     <Route path='/details/:personID'>
      <PersonProfile/>
     </Route>
     </Switch>
    </div>
  );
}

export default App;
