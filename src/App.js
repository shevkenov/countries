import Header from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <>
      <Header />
      <Route path="/:name" component={CountryDetails} />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
