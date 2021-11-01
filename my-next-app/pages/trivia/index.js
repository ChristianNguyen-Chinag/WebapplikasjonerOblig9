import { useEffect, useState } from 'react'
import axios from 'axios'

const Trivia = () => {
  const [trivia, setTrivia] = useState([])

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

  return (
    <div>
      <h1>Trivia!</h1>
      <section>{JSON.stringify(trivia)}</section>
    </div>
  )
}

export default Trivia
