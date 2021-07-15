
import './App.css';
import Change from './Component/Color'
import { Route,Switch} from "react-router-dom"
import Colorpage from './Component/Colorpage'
import Test from './Component/Test'
import './Style/Color.css'
function App() {
  return (
    <div className="App">
    <Switch>
    
      <Route exact path="/" ><Change/></Route>
      <Route exact path="/colorpage" ><Colorpage/></Route> 
      <Route exact path="/test" ><Test/></Route> 
      
      </Switch>
     
    </div>
  );
}

export default App;
