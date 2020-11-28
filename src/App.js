import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { isUserLoggedIn } from "./actions";
import "./App.css";
import PrivateRoute from "./components/HOC/PrivateRoute";
import Category from "./containers/Category";
import Home from "./containers/Home";
import Orders from "./containers/Orders";
import Products from "./containers/Products";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";

function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} /> 
        <PrivateRoute path="/category" component={Category} /> 
        <PrivateRoute path="/products" component={Products} />
        <PrivateRoute path="/orders" component={Orders} />

        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
