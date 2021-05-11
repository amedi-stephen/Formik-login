import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StyledContainer } from "./components/Styles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <StyledContainer>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </StyledContainer>
    </Router>
  );
}

export default App;
