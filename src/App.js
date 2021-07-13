import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductCreateForm from "./components/ProductCreateForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products/create">
          <ProductCreateForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
