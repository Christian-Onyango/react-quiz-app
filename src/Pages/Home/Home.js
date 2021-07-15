import React, { useState } from "react"
import "./Home.css"
import { MenuItem, TextField, Button } from "@material-ui/core"
import { organization } from "../../Data/Organization"
import { useHistory } from "react-router-dom"
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage"

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("")
  const [error, setError] = useState(false)

  const history = useHistory()

  const handlesSubmit = () => {
    if (!category || !name) {
      setError(true)
      return
    } else {
      setError(false)
      //fetchQuestions(category)
      history.push("/quiz")
    }
  }
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings_select">
          {error && <ErrorMessage>please fill all the fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            label="Select Location"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {organization.map((org) => (
              <MenuItem key={org.category} value={org.value}>
                {org.category}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handlesSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="/quiz.svg" className="banner" alt="quiz img" />
    </div>
  )
}

export default Home
