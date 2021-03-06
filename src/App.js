import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductCreateForm from "./components/ProductCreateForm";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import CreateProfile from "./components/CreateProfile";
import CategoryForm from "./components/CategoryForm";
import ChatForm from "./components/ChatForm"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/chat">
          <ChatForm />
        </Route>
        <Route path="/products/create">
          <ProductCreateForm />
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
        <Route path="/profiles/create">
          <CreateProfile />
        </Route>
        <Route path="/categories/create">
          <CategoryForm />
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
