import React from 'react'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/mynotes" exact component={MyNotes} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
