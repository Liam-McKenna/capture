//styles
import GlobalStyle from "./components/GlobalStyle";

//Import Navigation Bar
import Nav from "./components/Nav";
import NavUltra from "./components/NavUltra";

//import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import ProjectDetails from "./pages/ProjectDetails";
//router
import { Switch, Route, useLocation } from "react-router-dom";
//framer motion
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <GlobalStyle />
      {/* <Nav /> */}
      <NavUltra />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/work" exact>
            <OurWork />
          </Route>

          <Route path="/work/:id">
            {/* <MovieDetail /> */}
            <ProjectDetails />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
