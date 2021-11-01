import { useState } from 'react'
import axios from 'axios'

const CreateTrivia = () => {
  const [trivia, setTrivia] = useState([])
  const [error, setError] = useState(null)
  const [triviaFact, setTriviaFact] = useState('')

  const handleTriviaChange = (event) => {
    setTriviaFact(event.target.value)
  }

  const createTrivia = async () => {
    try {
      const response = await axios.post('api/trivia', { triviaFact })
      if (response?.data?.success) {
        setTrivia(response.data.data)
      }
    } catch (err) {
      setError(err?.response?.data?.error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createTrivia()
  }

  if (error) {
    return <p>Something went wrong :C {error}</p>
  }

  return (
    <div>
      <h1>A New Fact!?</h1>
      <form style={{ marginBottom: '2rem' }} onSubmit={handleSubmit}>
        <label htmlFor="newTrivia">Create a new Cool Elephant Fact!</label>
        <input
          id="newTrivia"
          type="text"
          name="newTrivia"
          value={triviaFact}
          onChange={handleTriviaChange}
        />
        <button type="submit">Send!</button>
      </form>
    </div>
  )
}
