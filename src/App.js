import './App.css';
import{Switch ,Redirect,Route} from "react-router-dom"

import Index_ from "./components/index/index_"
import Productlistpage from './components/main/productlistpage/productlistpage'
import NotFound from './components/Not-Found/Not-Found'
import Productdetailspage from './components/main/productdetailspage/Productdetailspage';
import StopWatch from './components/tools/stopwatch/StopWatch'
import Calculator from './components/tools/Calculator/Calculator';
import LoginForm from './components/LoginForm/LoginForm';
import Scrolltop from './components/Scrolltop/Scrolltop';
import Movie_index from'./components/MovieDB/Movie_index';
import Moviedetails from './components/MovieDB/Moviedetails'



function App() {
  return (
    <div className="wrapper">
      <Scrolltop />
      <Switch >
        <Route path="/" exact component={Index_} />
        <Route path="/productslist"  component={Productlistpage} />
        <Route path="/productdetails/:name/:price"  component={Productdetailspage} />
        <Route path="/movie" exact component={Movie_index} />
        <Route path="/stop"  component={StopWatch} />
        <Route path="/cal"  component={Calculator} />
        <Route path="/login" component={LoginForm} />
        <Route path='/movie/:id' component={Moviedetails} />
        <Route path='/not-found' component={NotFound} />
        <Redirect to='/not-found' />
      </Switch>
      
    </div>
  );
}

export default App;
