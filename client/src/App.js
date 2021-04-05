import React from 'react';
import {ShopProvider} from './Context'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Profile from './Profile';


function App() {
  console.log(process.env)
  return (
<ShopProvider>
  <Router>
    <Route path='/profile' component={Profile}></Route>
  </Router>
</ShopProvider>
  );
}

export default App;
