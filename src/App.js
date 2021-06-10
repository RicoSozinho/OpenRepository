import React from 'react';
import { Navbar } from './components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles.js';
import Home from './pages/HomePage/Home.js';
import Products from './pages/Products/Products.js';
import Services from './pages/Services/Services.js';
import SignUp from './pages/SignUp/SignUp.js';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/services" exact component={Services} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
