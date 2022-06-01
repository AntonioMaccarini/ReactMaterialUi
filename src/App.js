import { BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Route, Switch, } from 'react-router-dom';
import ChosenColor from './ChosenColor';
import Car2 from './Car2';

function App() {
  
  return (

    <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ChosenColor/>
          </Route>
          <Route path="/about">
            <Car2 />
          </Route>
        </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;
