import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home'
import AboutUs from './aboutUs'
import WhyNsut from './whyNsut'
import Process from './home'
import Downloads from './downloads'
import ContactUs from './contactUs'

function App() {
  return (
    <Router>
      <Switch>  
        <Route path='/about-us' component={AboutUs} />
        <Route path='/why-nsut' component={WhyNsut}/>
        <Route path='/process' component={Process}/>
        <Route path='/downloads'component={Downloads}/>
        <Route path='/contact-us'component={ContactUs}/>
        <Route path='/'component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
