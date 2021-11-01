import { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'

const CreateTrivia = () => {
  const [trivia, setTrivia] = useState([])
  const [error, setError] = useState(null)
  const [triviaFact, setTriviaFact] = useState('')

  const handleTriviaChange = (event) => {
    setTriviaFact(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createTrivia()
    getTrivias()
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

  const getTrivias = async () => {
    try {
      const response = await axios.get('/api/trivia')

      if (response?.data?.success) {
        //first data is axios. second data is what we called it in our api
        setTrivia(response.data.data)
      }
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  useEffect(() => {
    getTrivias()
  }, [])

  if (error) {
    return <p>Something went wrong :C {error}</p>
  }

  return (
    <div>
      <Head>
        <title>Create Trivia - Christian Nguyen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <section>{JSON.stringify(trivia)}</section>
    </div>
  )
}

export default CreateTrivia
