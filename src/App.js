import { BrowserRouter, Switch, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./Pages/Home/Home"
import Quiz from "./Pages/Quiz/Quiz"
import Result from "./Pages/Result/Result"
import quizes from "./Data/Questions"

function App() {
  const [name, setName] = useState("")
  const [questions, setQuestions] = useState(quizes)
  const [score, setScore] = useState(0)
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
  )
}

export default App
