import { Home, Landing, Detail, Form } from "./View/export";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/navBar";

function App() {
  const location = useLocation();
  return (
    <div className="">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={() => <Landing />} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/detail/:id" render={() => <Detail />} />
      <Route path="/create" render={() => <Form />} />
    </div>
  );
}

export default App;
