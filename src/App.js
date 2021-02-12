import './App.css';
import{Switch ,Redirect,Route} from "react-router-dom"

import Index_ from "./components/index/index_"
import Productlistpage from './components/main/productlistpage/productlistpage'
import NotFound from './components/Not-Found/Not-Found'
import Productdetailspage from './components/main/productdetailspage/Productdetailspage';


function App() {
  return (
    <div className="wrapper">
      <Switch >
        <Route path="/" exact component={Index_} />
        <Route path="/productslist"  component={Productlistpage} />
        <Route path="/productdetails"  component={Productdetailspage} />
        <Route path='/not-found' component={NotFound} />
        <Redirect to='/not-found' />
      </Switch>
      
    </div>
  );
}

export default App;
