import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductCreateForm from "./components/ProductCreateForm";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products/create">
          <ProductCreateForm />
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
