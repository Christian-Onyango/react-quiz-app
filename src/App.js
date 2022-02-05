import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import quizes from "./Data/Questions";

import netlifyIdentity from "netlify-identity-widget";

//a simple func to get the logged in user
const getUser = () => {
  return netlifyIdentity.currentUser();
};

function App() {
  const [name, setName] = useState("");
  const [questions] = useState(quizes);
  const [score, setScore] = useState(0);

  //show pop up if user is not logged in
  useEffect(() => {
    if (!getUser()) {
      netlifyIdentity.open();
    } else {
      setName(getUser().user_metadata.full_name);
    }
  }, []);

  //when a user has logged in
  netlifyIdentity.on("login", (user) => {
    if (user) {
      netlifyIdentity.close();
      setName(user.user_metadata.full_name);
    }
  });

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home name={name} setName={setName} questions={questions} />
          </Route>
          <Route path="/quiz" exact>
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
            />
          </Route>
          <Route path="/result" exact>
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
